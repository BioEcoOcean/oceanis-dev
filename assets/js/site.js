const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#primary-navigation");

menuButton?.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  const setOpen = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    dropdown.classList.toggle("is-open", isOpen);
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));

  dropdown.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      toggle.focus();
    }
  });

  dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.contains(event.relatedTarget)) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) setOpen(false);
  });
});