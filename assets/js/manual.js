const toc = document.querySelector(".manual-toc");
const tocNav = toc?.querySelector("nav");
const tocLinks = toc ? [...toc.querySelectorAll("a[href^='#']")] : [];
const sidebarLayout = window.matchMedia("(min-width: 901px)");
const headingOffset = 120;

// The sidebar is always open on wide screens; on small screens it starts collapsed.
function syncTocOpen() {
  toc.open = sidebarLayout.matches;
}

function headingFor(link) {
  return document.getElementById(decodeURIComponent(link.hash.slice(1)));
}

function setActive(link) {
  tocLinks.forEach((item) => item.removeAttribute("aria-current"));
  toc.querySelectorAll(".is-expanded").forEach((item) => item.classList.remove("is-expanded"));
  if (!link) return;

  link.setAttribute("aria-current", "location");
  link.closest("#markdown-toc > li")?.classList.add("is-expanded");

  // Keep the active entry visible inside the scrolling sidebar without moving the page.
  if (sidebarLayout.matches) {
    const navBox = tocNav.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    if (linkBox.top < navBox.top || linkBox.bottom > navBox.bottom) {
      tocNav.scrollTop += linkBox.top - navBox.top - navBox.height / 3;
    }
  }
}

function updateActive() {
  let current = null;
  for (const link of tocLinks) {
    const heading = headingFor(link);
    if (!heading) continue;
    if (heading.getBoundingClientRect().top - headingOffset > 0) break;
    current = link;
  }
  setActive(current ?? tocLinks[0]);
}

if (toc) {
  toc.classList.add("is-enhanced");
  syncTocOpen();
  sidebarLayout.addEventListener("change", syncTocOpen);

  tocLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!sidebarLayout.matches) toc.open = false;
    });
  });

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateActive();
      ticking = false;
    });
  }, { passive: true });

  updateActive();
}

// Figure lightbox: clicking a figure opens it enlarged in a modal dialog.
const figures = [...document.querySelectorAll(".manual-figure")];

if (figures.length) {
  const lightbox = document.createElement("dialog");
  lightbox.className = "figure-lightbox";
  lightbox.innerHTML = `
    <button type="button" class="figure-lightbox-close" aria-label="Close enlarged figure">&times;</button>
    <img alt="">
    <p class="figure-lightbox-caption"></p>
  `;
  document.body.append(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".figure-lightbox-caption");

  lightbox.querySelector(".figure-lightbox-close").addEventListener("click", () => lightbox.close());

  // Clicks on the backdrop land on the dialog element itself.
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  lightbox.addEventListener("close", () => document.body.classList.remove("has-lightbox"));

  figures.forEach((figure) => {
    const img = figure.querySelector("img");
    if (!img) return;
    const caption = figure.querySelector("figcaption");

    // Wrap the image in a button so it is reachable and openable from the keyboard.
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "manual-figure-zoom";
    trigger.setAttribute("aria-label", `Enlarge figure: ${img.alt}`);
    img.replaceWith(trigger);
    trigger.append(img);

    trigger.addEventListener("click", () => {
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption?.textContent ?? "";
      lightboxCaption.hidden = !caption;
      document.body.classList.add("has-lightbox");
      lightbox.showModal();
    });
  });
}
