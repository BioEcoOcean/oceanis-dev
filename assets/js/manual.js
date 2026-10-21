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
