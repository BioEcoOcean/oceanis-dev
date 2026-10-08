const data = {
  nodes: [
    { id: "Evaluation", descriptors: "Evaluate, Reflect, Learn, Adapt, Improve",
      themes: ["Objectives and success criteria",
      "Performance and effectiveness",
      "Outcomes and impacts",
      "User uptake and usefulness",
      "Learning and reflection",
      "Adaptation and improvement"
    ]
    }, //info: "Text", url: "pages/evaluation.html"  },
    { id: "Create Your Own", descriptors: "Write your own descriptors here", themes: ["Write your own themes here"] }, //info: "Text", url: "pages/planning.html"  },
    { id: "Exploration", name: "Exploration", descriptors: "Explore, Map, Identify, Review, Prioritise",
      themes: ["Knowledge landscape",
      "Existing initiatives and infrastructures",
      "Gaps and uncertainties",
      "Opportunities and priorities",
      "Spatial and thematic scope"]
    }, //info: "Text", url: "pages/review-to-learn.html"   },
    { id: "Societal Relevance", descriptors: "Contextualise, Identify, Engage, Align, Anticipate",
      themes: ["Societal context",
      "Stakeholders and actors",
      "Needs and priorities",
      "Relevance to policy and practice",
      "Capacity, literacy, and empowerment",
      "Potential societal impact"]
    }, //info: "Text", url: "pages/application-in-society.html" },
    { id: "Data Collection", name: "Data Collection", descriptors: "Observe, Measure, Sample, Monitor, Document",
      themes: ["Data types and variables",
      "Data sources and ownership",
      "Methods and protocols",
      "Spatial scale",
      "Temporal scale",
      "Data quality and representativeness"]
    },// info: "Text", url: "pages/data-collection.html"  },
    { id: "Data Management", name: "Data Management", descriptors: "Organise, Standardise, Curate, Preserve, Publish",
      themes: ["Data organisation and documentation", 
      "Standardisation and interoperability",
      "Metadata and traceability",
      "Accessibility and sharing",
      "Long-term preservation",
      "Responsibilities and governance"]
    }, //info: "Text", url: "pages/data-management.html"  },
    { id: "Analysis & Modelling", name: "Analysis & Modelling", descriptors: "Integrate, Analyse, Model, Scale, Validate",
      themes: ["Data integration across sources",
      "Analytical and modelling approaches",
      "Assumptions and uncertainty",
      "Scaling and extrapolation",
      "Scenario development",
      "Validation and robustness"]
    }, //info: "Text", url: "pages/analysis-modelling.html"  },
    { id: "Data Products", name: "Data Products", descriptors: "Develop, Translate, Package, Deliver, Maintain",
      themes: ["Types of products and tools",
      "Intended users and use cases",
      "Indicators and metrics",
      "Usability and accessibility",
      "Update and maintenance needs",
      "Reusability and scalability"]
    }, //info: "Text", url: "pages/data-products.html"  },
    { id: "Communication & Outreach", name: "Communication & Outreach", descriptors: "Communicate, Visualise, Disseminate, Exchange, Engage",
      themes: ["Target audiences",
      "Key messages",
      "Language and framing",
      "Communication formats",
      "Channels and timing",
      "Feedback mechanisms"]
    }, //info: "Text", url: "pages/communication-outreach.html"  },
  ],
  links: [
    { source: "Evaluation", target: "Exploration" },
    { source: "Evaluation", target: "Create Your Own" },
    { source: "Evaluation", target: "Data Collection" },
    { source: "Evaluation", target: "Data Management" },
    { source: "Evaluation", target: "Analysis & Modelling" },
    { source: "Evaluation", target: "Data Products" },
    { source: "Evaluation", target: "Societal Relevance" },
    { source: "Evaluation", target: "Communication & Outreach" },
    { source: "Exploration", target: "Create Your Own" },
    { source: "Exploration", target: "Data Collection" },
    { source: "Exploration", target: "Data Management" },
    { source: "Exploration", target: "Analysis & Modelling" },
    { source: "Exploration", target: "Data Products" },
    { source: "Exploration", target: "Societal Relevance" },
    { source: "Exploration", target: "Communication & Outreach" },
    { source: "Create Your Own", target: "Data Collection" },
    { source: "Create Your Own", target: "Data Management" },
    { source: "Create Your Own", target: "Analysis & Modelling" },
    { source: "Create Your Own", target: "Data Products" },
    { source: "Create Your Own", target: "Societal Relevance" },
    { source: "Create Your Own", target: "Communication & Outreach" },
    { source: "Data Collection", target: "Data Management" },
    { source: "Data Collection", target: "Analysis & Modelling" },
    { source: "Data Collection", target: "Data Products" },
    { source: "Data Collection", target: "Societal Relevance" },
    { source: "Data Collection", target: "Communication & Outreach" },
    { source: "Data Management", target: "Analysis & Modelling" },
    { source: "Data Management", target: "Data Products" },
    { source: "Data Management", target: "Societal Relevance" },
    { source: "Data Management", target: "Communication & Outreach" },
    { source: "Analysis & Modelling", target: "Data Products" },
    { source: "Analysis & Modelling", target: "Societal Relevance" },
    { source: "Analysis & Modelling", target: "Communication & Outreach" },
    { source: "Data Products", target: "Societal Relevance" },
    { source: "Data Products", target: "Communication & Outreach" },
    { source: "Societal Relevance", target: "Communication & Outreach" },
  ],
};

// Dummy questions with tags
const questions = [
  { text: "WHO", tags: ["Exploration","Create Your Own", "Data Collection", "Data Management", "Analysis & Modelling", "Data Products", "Societal Relevance", "Communication & Outreach", "Evaluation"] },
  { text: "WHERE", tags: ["Exploration","Create Your Own", "Data Collection", "Data Management", "Analysis & Modelling", "Data Products", "Societal Relevance", "Communication & Outreach", "Evaluation"] },
  { text: "WHEN", tags: ["Exploration","Create Your Own", "Data Collection", "Data Management", "Analysis & Modelling", "Data Products", "Societal Relevance", "Communication & Outreach", "Evaluation"] },
  { text: "WHAT", tags: ["Exploration","Create Your Own", "Data Collection", "Data Management", "Analysis & Modelling", "Data Products", "Societal Relevance", "Communication & Outreach", "Evaluation"] },
  { text: "WHY", tags: ["Exploration","Create Your Own", "Data Collection", "Data Management", "Analysis & Modelling", "Data Products", "Societal Relevance", "Communication & Outreach", "Evaluation"] },
  { text: "HOW", tags: ["Exploration","Create Your Own", "Data Collection", "Data Management", "Analysis & Modelling", "Data Products", "Societal Relevance", "Communication & Outreach", "Evaluation"] },
];

const tooltip = d3.select("#tooltip");
let multiSelectMode = false;

// Initialize SVG
const container = document.getElementById("spiderweb");
const svg = d3.select(container).append("svg");
const svgGroup = svg.append("g");

const dimensions = { width: 0, height: 0, radius: 0, centerX: 0, centerY: 0 };

function updateDimensions() {
  dimensions.width = container.offsetWidth;
  dimensions.height = container.offsetHeight || dimensions.width * 0.8;
  dimensions.radius = Math.min(dimensions.width, dimensions.height) * 0.35;
  dimensions.centerX = dimensions.width / 2;
  dimensions.centerY = dimensions.height / 2;

  svg.attr("width", dimensions.width).attr("height", dimensions.height);
}

const zoom = d3.zoom()
.scaleExtent([0.5, 5])
.on("zoom", (event) => {
  svgGroup.attr("transform", event.transform);
});
svg.call(zoom);

function findNodeById(id) {
  return data.nodes.find((node) => node.id === id);
}

function initializeNodes() {
  const nodeEnter = svgGroup
    .selectAll(".node")
    .data(data.nodes)
    .enter()
    .append((d) => document.createElementNS("http://www.w3.org/2000/svg", d.id === "Create Your Own" ? "rect" : "circle"));

  nodeEnter
    .attr("class", (d) => (d.id === "Create Your Own" ? "node blank" : "node"))
    .attr("r", (d) => (d.id === "Create Your Own" ? null : 15))
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip)
    .on("click", toggleNodeSelection);
}

function initializeLinks() {
  svgGroup
    .selectAll(".link")
    .data(data.links)
    .enter()
    .append("line")
    .attr("class", (d) => (d.source === "Create Your Own" || d.target === "Create Your Own" ? "link blank" : "link"))
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip)
    .on("click", toggleLinkSelection);
}

function initializeLabels() {
  svgGroup
    .selectAll(".node-label")
    .data(data.nodes)
    .enter()
    .append("text")
    .attr("class", "node-label")
    .text((d) => d.name || d.id)
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip);
}

function positionElements() {
  data.nodes.forEach((node, i) => {
    const angle = (i / data.nodes.length) * 2 * Math.PI - Math.PI / 2;
    node.x = dimensions.centerX + dimensions.radius * Math.cos(angle);
    node.y = dimensions.centerY + dimensions.radius * Math.sin(angle);
  });

  svgGroup.selectAll(".node").each(function (d) {
    const el = d3.select(this);
    if (d.id === "Create Your Own") {
      const w = 40, h = 30;
      el.attr("x", d.x - w / 2).attr("y", d.y - h / 2).attr("width", w).attr("height", h);
    } else {
      el.attr("cx", d.x).attr("cy", d.y);
    }
  });
  svgGroup
    .selectAll(".link")
    .attr("x1", (d) => findNodeById(d.source).x)
    .attr("y1", (d) => findNodeById(d.source).y)
    .attr("x2", (d) => findNodeById(d.target).x)
    .attr("y2", (d) => findNodeById(d.target).y);
  svgGroup
    .selectAll(".node-label")
    .attr("x", (d) => d.x + 22 * Math.cos(Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX)))
    .attr("y", (d) => d.y + 22 * Math.sin(Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX)))
    .attr("text-anchor", (d) => {
      const angle = Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX);
      return Math.cos(angle) > 0 ? "start" : "end";
    })
    .attr("alignment-baseline", (d) => {
      const angle = Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX);
      return Math.sin(angle) > 0 ? "hanging" : "alphabetic";
    });

}

function toggleNodeSelection(event, node) {
  const nodeElement = d3.select(this);
  const isSelected = nodeElement.classed("selected");
  const nodeId = node.id;

  if (multiSelectMode) {
    if (isSelected) {
      // Deselect the node itself
      nodeElement.classed("selected", false);

      // Deselect all links connected to this node
      d3.selectAll(".link").each(function(link) {
        if (link.source === nodeId || link.target === nodeId) {
          d3.select(this).classed("selected", false);
        }
      });
      hideInfoPanel();resetZoom();
      // Do NOT try to deselect other nodes here!
    } else {
      // Select the node itself
      nodeElement.classed("selected", true);
    }
  } else {
    if (isSelected) {
      // Deselect if the node is already selected
      d3.selectAll(".link, .node").classed("selected", false);
      hideInfoPanel();resetZoom();
    } else {
      // Clear all selections and select the clicked node
      d3.selectAll(".link, .node").classed("selected", false);
      nodeElement.classed("selected", true);
    }
  }


  if (!isSelected) zoomToTarget([node]);
  updateInfoPanel();
}

function toggleLinkSelection(event, link) {
  const linkElement = d3.select(this);
  const isSelected = linkElement.classed("selected");

  const sourceNodeId = link.source;
  const targetNodeId = link.target;
  const sourceNode = findNodeById(sourceNodeId);
  const targetNode = findNodeById(targetNodeId);

  if (multiSelectMode) {
    if (isSelected) {
      // Deselect the link itself
      linkElement.classed("selected", false);

      // Check if the source and target nodes are connected to any other selected links
      const selectedLinks = d3.selectAll(".link.selected").data();

      // Determine if sourceNode should remain selected
      const isSourceConnected = selectedLinks.some(
        (otherLink) =>
          otherLink.source === sourceNodeId || otherLink.target === sourceNodeId
      );

      // Determine if targetNode should remain selected
      const isTargetConnected = selectedLinks.some(
        (otherLink) =>
          otherLink.source === targetNodeId || otherLink.target === targetNodeId
      );

      // Deselect sourceNode if not connected to other selected links
      if (!isSourceConnected) {
        d3.selectAll(".node").each(function (node) {
          if (node.id === sourceNodeId) {
            d3.select(this).classed("selected", false);
          }
        });
      }

      // Deselect targetNode if not connected to other selected links
      if (!isTargetConnected) {
        d3.selectAll(".node").each(function (node) {
          if (node.id === targetNodeId) {
            d3.select(this).classed("selected", false);
          }
        });
      }
      hideInfoPanel();resetZoom();
    } else {
      // Select the link and connected nodes
      linkElement.classed("selected", true);

      d3.selectAll(".node").each(function (node) {
        if (node.id === sourceNodeId || node.id === targetNodeId) {
          d3.select(this).classed("selected", true);
        }
      });
    }
  } else {
    // Single-select mode logic
    if (isSelected) {
      d3.selectAll(".link, .node").classed("selected", false);
      hideInfoPanel();resetZoom();
    } else {
      d3.selectAll(".link, .node").classed("selected", false);
      linkElement.classed("selected", true);

      d3.selectAll(".node").each(function (node) {
        if (node.id === sourceNodeId || node.id === targetNodeId) {
          d3.select(this).classed("selected", true);
        }
      });
    }
  }


  if (!isSelected)zoomToTarget([sourceNode, targetNode]);
  updateInfoPanel();
}

function zoomToTarget(targetNodes = []) {
  const svg = d3.select("svg"); // Adjust selector based on your setup
  const g = svg.select("g"); // Assuming your graph elements are within a <g> element

  if (targetNodes.length === 0) {
    // Reset zoom to default view
    const resetTransform = d3.zoomIdentity.translate(0, 0).scale(1);
    svg.transition()
      .duration(750)
      .call(zoom.transform, resetTransform); // Update d3.zoom state
    return;
  }

  const bounds = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };

  targetNodes.forEach(node => {
    bounds.x1 = Math.min(bounds.x1, node.x);
    bounds.y1 = Math.min(bounds.y1, node.y);
    bounds.x2 = Math.max(bounds.x2, node.x);
    bounds.y2 = Math.max(bounds.y2, node.y);
  });

  const width = bounds.x2 - bounds.x1;
  const height = bounds.y2 - bounds.y1;
  const centerX = (bounds.x1 + bounds.x2) / 2;
  const centerY = (bounds.y1 + bounds.y2) / 2;

  const svgWidth = parseInt(svg.style("width"));
  const svgHeight = parseInt(svg.style("height"));

  const scale = Math.min(svgWidth / width, svgHeight / height, 2); // Cap scale at 2 for max zoom
  const translate = [
    svgWidth / 2 - scale * centerX - 100,
    svgHeight / 2 - scale * centerY,
  ];

  const transform = d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale);

  svg.transition()
    .duration(750)
    .call(zoom.transform, transform); // Update d3.zoom state
}

function resetZoom() {
  const resetTransform = d3.zoomIdentity.translate(0, 0).scale(1);
  svg.transition()
    .duration(750)
    .call(zoom.transform, resetTransform); // Update d3.zoom state
}
function showTooltip(event, d) {
  const content = d.descriptors + "<br><br>" + d.themes.join(", ") || `${d.source} ↔ ${d.target}`;
  tooltip.style("left", `${event.pageX + 10}px`)
    .style("top", `${event.pageY + 10}px`)
    .style("display", "inline-block")
    .html(`<strong>${d.id || "Link"}</strong><br>${content}`);
}
function hideTooltip() {
  tooltip.style("display", "none");
}

function updateInfoPanel() {
  console.log("updateInfoPanel called");
  const selectedNodes = d3.selectAll(".node.selected").data();
  const selectedLinks = d3.selectAll(".link.selected").data();

  const selectedNodeIds = selectedNodes.map(node => node.id);
  const selectedLinkNodeIds = selectedLinks.flatMap(link => [link.source, link.target]);

  const allSelectedIds = [...new Set([...selectedNodeIds, ...selectedLinkNodeIds])];

  const selectedDescriptors = selectedNodes
    .map(node => `<strong>${node.id}:</strong> ${node.descriptors}`)
    .join("<br><br>");
  const selectedThemes = selectedNodes
    .map(node => `<strong>${node.id}:</strong> ${node.themes.join(", ")}`)
    .join("<br><br>");

    const selectedComponents = allSelectedIds.join(", ");
    if (allSelectedIds.length > 0) {
      showInfoPanel(`
        <h2>Blueprint Component(s):</h2><p>${selectedComponents}</p>
        <h2><span class="concept-highlight concept-highlight-descriptor">Descriptor Words:</span></h2><p>${selectedDescriptors}</p>
        <h2><span class="concept-highlight concept-highlight-themes">Themes:</span></h2><p>${selectedThemes}</p>
        `);
    } else {
    hideInfoPanel();
  }
}
function showInfoPanel(content) {
  console.log("showInfoPanel called with content:", content);
  d3.select("#info-content").html(content);
  document.getElementById("info-panel").style.display = "block";
}
function hideInfoPanel() {
  console.log("hideInfoPanel called");
  document.getElementById("info-panel").style.display = "none";
  resetZoom();
}

function resetSelection() {
  d3.selectAll(".node, .link").classed("selected", false);
  updateInfoPanel();
  zoomToTarget();
}

document.getElementById("toggle-selection-mode").addEventListener("change", (e) => {
  multiSelectMode = e.target.checked;
  document.getElementById("toggle-label").textContent = multiSelectMode ? "Multi-Select" : "Single Select";
});
document.getElementById("close-info-panel").addEventListener("click", hideInfoPanel);

document.getElementById("deselect-all").addEventListener("click", resetSelection);

function initialize() {
  updateDimensions();
  initializeLinks();
  initializeNodes();
  initializeLabels();
  positionElements();

  const resizeObserver = new ResizeObserver(() => {
    updateDimensions();
    positionElements();
  });
  resizeObserver.observe(container);
}

initialize();