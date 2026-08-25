const projects = [
  {
    id: "01",
    title: "Wind Profiler",
    category: "AEROSPACE • RESEARCH",
    summary: "A research-focused mechanical design project involving aerodynamic hardware and experimental development.",
    description: "This project involved mechanical design and CAD development for an aerospace research system. The work emphasized practical geometry, manufacturability, component integration, and iterative refinement. Some technical details are intentionally omitted because the work is not yet publicly shareable.",
    image: "assets/wind-profiler-cad.jpg",
    images: ["assets/wind-profiler-cad.jpg","assets/wind-profiler-02.jpg","assets/wind-profile-results.jpg"],
    skills: ["SolidWorks","Mechanical Design","CAD","Experimental Testing"],
    highlights: [["ROLE","Undergraduate Researcher"],["PRIMARY TOOL","SolidWorks"],["FOCUS","Mechanical Design"]]
  },
  {
    id: "02",
    title: "Wind Chamber",
    category: "AEROSPACE • TESTING",
    summary: "Design and development work centered around aerodynamic experimentation and test hardware.",
    description: "A hands-on engineering project focused on creating and refining hardware for controlled aerodynamic testing. The work combined CAD, mechanical design decisions, fabrication considerations, and test-driven iteration.",
    image: "assets/wind-chamber-cad.jpg",
    images: ["assets/wind-chamber-cad.jpg","assets/wind-chamber-01.jpg","assets/wind-chamber-02.jpg"],
    skills: ["SolidWorks","CAD","Aerodynamics","Testing"],
    highlights: [["FOCUS","Aerodynamic Testing"],["ROLE","Design & Development"],["METHOD","Iterative Testing"]]
  },
  {
    id: "03",
    title: "Sopwith Camel RC Aircraft",
    category: "AIRCRAFT • DESIGN",
    summary: "A radio-controlled aircraft project exploring lightweight structure, aerodynamic layout, and practical fabrication.",
    description: "Designed as a hands-on aircraft project, this build required translating an aircraft concept into a flyable RC platform. The project emphasized lightweight construction, component integration, stability, and real-world flight testing.",
    image: "assets/sopwith-04.jpg",
    images: ["assets/sopwith-04.jpg","assets/sopwith-02.jpg","assets/sopwith-03.jpg"],
    skills: ["Aircraft Design","CAD","Fabrication","Flight Testing"],
    highlights: [["TYPE","RC Aircraft"],["FOCUS","Lightweight Design"],["TEST","Flight Testing"]]
  },
  {
    id: "04",
    title: "Nutball RC Aircraft",
    category: "AIAA • AIRCRAFT WORKSHOP",
    summary: "A lightweight RC aircraft designed, built, and flight-tested through an AIAA aircraft workshop.",
    description: "The Nutball was a practical aircraft design and fabrication exercise. The project provided experience with lightweight structures, aerodynamic layout, assembly, control systems, and iterative flight testing.",
    image: "assets/nutball-01.jpg",
    images: ["assets/nutball-01.jpg","assets/nutball-02.jpg"],
    skills: ["Aircraft Design","Fabrication","Flight Testing","AIAA"],
    highlights: [["YEAR","2025"],["TYPE","RC Aircraft"],["PROCESS","Design → Build → Fly"]]
  },
  {
    id: "05",
    title: "Autonomous Mechanical Music Maker",
    category: "MECHATRONICS • PERSONAL PROJECT",
    summary: "An automated musical instrument integrating mechanical, electrical, and software systems.",
    description: "Designed and built an autonomous system that uses a Raspberry Pi, solenoids, relays, and an air system to play a recorder. The project required mechanical packaging, electrical integration, programming, troubleshooting, and synchronization between hardware and software.",
    image: "assets/music-maker-03.jpg",
    images: ["assets/music-maker-03.jpg","assets/music-maker-02.jpg","assets/music-maker-01.jpg"],
    skills: ["Raspberry Pi","Python","Electronics","Mechanical Design","Prototyping"],
    highlights: [["CONTROLLER","Raspberry Pi"],["ACTUATION","Solenoids"],["SYSTEM","Mechanical + Electrical + Software"]]
  }
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const gallery = document.getElementById("modalGallery");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalSummary = document.getElementById("modalSummary");
const modalDescription = document.getElementById("modalDescription");
const modalSkills = document.getElementById("modalSkills");
const modalHighlights = document.getElementById("modalHighlights");

function imageOrPlaceholder(src, alt) {
  return `<img src="${src}" alt="${alt}" onerror="this.src='assets/project-placeholder.svg';">`;
}

projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "project-card" + (i === 0 ? " featured" : "");
  card.innerHTML = `
    <div class="project-image">${imageOrPlaceholder(p.image, p.title)}</div>
    <div class="project-info">
      <div class="project-number">${p.id} / ${p.category}</div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="project-link">VIEW PROJECT ↗</div>
    </div>`;
  card.addEventListener("click", () => openProject(p));
  grid.appendChild(card);
});

function openProject(p) {
  modalCategory.textContent = p.category;
  modalTitle.textContent = p.title;
  modalSummary.textContent = p.summary;
  modalDescription.textContent = p.description;

  modalSkills.innerHTML = p.skills.map(s => `<span>${s}</span>`).join("");
  modalHighlights.innerHTML = p.highlights.map(h => `<div class="highlight"><strong>${h[0]}</strong><span>${h[1]}</span></div>`).join("");

  gallery.innerHTML = p.images.map((src, i) =>
    `<figure><a href="${src}" target="_blank" rel="noopener">${imageOrPlaceholder(src, p.title + " project image")}</a></figure>`
  ).join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.getElementById("modalClose").addEventListener("click", closeProject);
document.querySelector(".modal-backdrop").addEventListener("click", closeProject);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProject();
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});
document.querySelectorAll("#navLinks a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("show"));
});
