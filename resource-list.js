const resourceApp = document.querySelector("#resource-app");
const resourceList = document.querySelector("#resources-list");
const resourceCount = document.querySelector("#resource-count");
const filterControls = document.querySelector("#filter-controls");
const nonComponentColumns = new Set(["Name", "Link", "Description", "EOVs"]);

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function getResourceComponents(resource) {
  return Object.keys(resource).filter((key) =>
    !nonComponentColumns.has(key) && String(resource[key] ?? "").trim().toLowerCase() === "yes"
  );
}

function getEOVs(resource) {
  return String(resource.EOVs ?? "")
    .split(/[;|]/)
    .map((eov) => eov.trim())
    .filter(Boolean);
}

function getSafeLink(value) {
  try {
    const url = new URL(value, window.location.origin);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function renderResources(data) {
  const activeComponents = Array.from(filterControls.querySelectorAll("input:checked"))
    .map((input) => input.value);
  const searchTerm = document.querySelector("#resource-search").value.trim().toLocaleLowerCase();
  const matchAllComponents = document.querySelector("#exclusive-filter-toggle").checked;

  const filteredResources = data.filter((resource) => {
    const components = getResourceComponents(resource);
    const matchesComponents = activeComponents.length === 0
      ? components.length === 0
      : (matchAllComponents
        ? activeComponents.every((component) => components.includes(component))
        : activeComponents.some((component) => components.includes(component)));
    const searchableText = Object.entries(resource)
      .filter(([field]) => field !== "Link")
      .map(([, value]) => String(value ?? ""))
      .join(" ")
      .toLocaleLowerCase();
    return matchesComponents && (!searchTerm || searchableText.includes(searchTerm));
  });

  resourceCount.textContent = `Showing ${filteredResources.length} of ${data.length} resources`;
  if (filteredResources.length === 0) {
    resourceList.innerHTML = '<p class="empty-state">No resources match this search. Try another term or clear a component filter.</p>';
    return;
  }

  resourceList.innerHTML = filteredResources.map((resource) => {
    const name = escapeHTML(resource.Name || "Untitled resource");
    const link = getSafeLink(resource.Link);
    const title = link
      ? `<a href="${escapeHTML(link)}" target="_blank" rel="noopener noreferrer">${name}<span aria-hidden="true"> &#8599;</span></a>`
      : name;
    const description = resource.Description ? `<p>${escapeHTML(resource.Description)}</p>` : "";
    const componentTags = getResourceComponents(resource).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`);
    const eovTags = getEOVs(resource).map((eov) => `<span class="tag tag-eov">${escapeHTML(eov)}</span>`);
    const tags = [...componentTags, ...eovTags].join("");

    return `<article class="resource-entry"><h2>${title}</h2>${description}${tags ? `<div class="resource-tags">${tags}</div>` : ""}</article>`;
  }).join("");
}

function createComponentFilters(data) {
  const columns = Object.keys(data[0]).filter((column) => !nonComponentColumns.has(column));
  filterControls.innerHTML = columns.map((component, index) => `
    <label class="filter-option">
      <input type="checkbox" value="${escapeHTML(component)}" checked>
      <span>${escapeHTML(component)}</span>
    </label>`).join("");
}

async function initializeResourceBrowser() {
  try {
    const data = await d3.csv(resourceApp.dataset.csvUrl);
    if (data.length === 0) {
      resourceList.innerHTML = '<p class="empty-state">No resources are listed yet.</p>';
      resourceCount.textContent = "";
      return;
    }

    createComponentFilters(data);
    filterControls.addEventListener("change", () => renderResources(data));
    document.querySelector("#resource-search").addEventListener("input", () => renderResources(data));
    document.querySelector("#exclusive-filter-toggle").addEventListener("change", () => renderResources(data));
    document.querySelector("#select-all-btn").addEventListener("click", () => {
      filterControls.querySelectorAll("input").forEach((input) => { input.checked = true; });
      renderResources(data);
    });
    document.querySelector("#deselect-all-btn").addEventListener("click", () => {
      filterControls.querySelectorAll("input").forEach((input) => { input.checked = false; });
      renderResources(data);
    });
    renderResources(data);
  } catch (error) {
    console.error("Could not load the resource catalog:", error);
    resourceCount.textContent = "";
    resourceList.innerHTML = '<p class="empty-state">Could not load the resource catalog.</p>';
  }
}

initializeResourceBrowser();
