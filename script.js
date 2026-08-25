const projects = [
  {
    number: "01",
    title: "Wind Profiler",
    category: "Experimental Instrumentation",
    description: "Created an automated wind-profile measurement system using two motors, an ESP32, motor controllers, and a pitot tube. The device travels along a T-slotted bar inside the wind chamber and collects averaged wind-speed data at multiple locations and heights.",
    short: "Automated measurement system for mapping wind speed throughout a small-scale wind chamber.",
    image: "assets/wind-profiler-cad.png",
    gallery: ["assets/wind-profiler-cad.png","assets/wind-profiler-01.jpg","assets/wind-profiler-02.jpg","assets/wind-profile-results.png"],
    tags: ["ESP32","Pitot Tube","Instrumentation","Data Collection"],
    facts: ["~150 data points","5 s averaging","5 heights","5 chamber locations"]
  },
  {
    number: "02",
    title: "Wind Chamber",
    category: "Experimental Facility",
    description: "Designed a wind chamber for testing a small-scale rover. The design considered multiple panel materials, including drywall, polycarbonate, and plywood, and focused on creating a seamless interior to improve airflow through the test section.",
    short: "Designed and built a small-scale wind chamber for controlled rover testing.",
    image: "assets/wind-chamber-cad.png",
    gallery: ["assets/wind-chamber-cad.png","assets/wind-chamber-01.jpg","assets/wind-chamber-02.jpg"],
    tags: ["CAD","Test Facility","Fabrication","Aerodynamics"],
    facts: ["Small-scale testing","Multiple panel materials","Seamless interior"]
  },
  {
    number: "03",
    title: "Sopwith Camel RC Aircraft",
    category: "Aircraft Design",
    description: "Developed a scaled R/C aircraft model of the Sopwith Camel using full-scale reference dimensions and imagery to establish accurate geometry and proportions. Conducted flight testing and iterative design refinements to improve stability and control response.",
    short: "Scaled aircraft design based on historical reference geometry, followed by flight testing and iteration.",
    image: "assets/sopwith-04.jpg",
    gallery: ["assets/sopwith-02.jpg","assets/sopwith-01.jpg","assets/sopwith-03.jpg","assets/sopwith-04.jpg"],
    tags: ["Aircraft Design","CAD","Fabrication","Flight Testing"],
    facts: ["Scaled reference geometry","R/C aircraft","Iterative flight testing"]
  },
  {
    number: "04",
    title: "Nutball RC Aircraft",
    category: "Aircraft Design & Testing",
    description: "Created small Nutball-style aircraft and conducted flight testing to evaluate the design and guide improvements. The project included fabrication with lightweight materials, assembly, test flights, and iterative refinements.",
    short: "Designed and flight-tested small Nutball-style aircraft with iterative refinements.",
    image: "assets/nutball-01.jpg",
    gallery: ["assets/nutball-01.jpg","assets/nutball-02.jpg"],
    tags: ["Aircraft Design","Fabrication","Flight Testing","Iteration"],
    facts: ["Small-scale aircraft","Flight testing","Iterative design"]
  },
  {
    number: "05",
    title: "Autonomous Mechanical Music Maker",
    category: "Mechatronics",
    description: "Designed and built an autonomous music-making system using a Raspberry Pi, solenoids, and an air pump to play a recorder automatically. The project required integrating mechanical components, electronics, pneumatics, and software into a working prototype.",
    short: "Integrated mechanical, electrical, pneumatic, and software systems into an autonomous instrument.",
    image: "assets/music-maker-03.jpg",
    gallery: ["assets/music-maker-01.jpg","assets/music-maker-02.jpg","assets/music-maker-03.jpg"],
    tags: ["Raspberry Pi","Solenoids","Pneumatics","Python"],
    facts: ["16 solenoids","Raspberry Pi","Automated control"]
  }
];

const grid = document.getElementById("project-grid");
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");

grid.innerHTML = projects.map((p, i) => `
  <article class="project-card" data-index="${i}" tabindex="0" role="button" aria-label="View details for ${p.title}">
    <div class="project-image">
      <img src="${p.image}" alt="${p.title}">
    </div>
    <div class="project-info">
      <div class="project-number">${p.number} / ${p.category}</div>
      <h3>${p.title}</h3>
      <p>${p.short}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-more">View project details →</div>
    </div>
  </article>
`).join("");

function openProject(index){
  const p = projects[index];
  modalContent.innerHTML = `
    <div class="modal-header">
      <img src="${p.image}" alt="${p.title}">
      <div class="modal-title">
        <p class="kicker">${p.number} / ${p.category}</p>
        <h2>${p.title}</h2>
        <p>${p.short}</p>
      </div>
    </div>
    <div class="modal-body">
      <h3>Project overview</h3>
      <p>${p.description}</p>
      <div class="modal-facts">${p.facts.map(f => `<span>${f}</span>`).join("")}</div>
      <div class="modal-gallery">
        ${p.gallery.map((src, i) => `<img src="${src}" alt="${p.title} project image ${i+1}" loading="lazy">`).join("")}
      </div>
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => openProject(Number(card.dataset.index)));
  card.addEventListener("keydown", e => {
    if(e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProject(Number(card.dataset.index));
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
