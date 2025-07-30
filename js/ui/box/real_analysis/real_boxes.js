const topics = [
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" },
    { label: "Raabe Duhamel", icon: "" }
];

const container = document.getElementById("grid-container");

topics.forEach( ({label, icon} ) => {
    const box = document.createElement("div");
    box.className = "box";
    
    box.innerHTML = `
    <h2>${label}</h2>
    <div class="hover-layer">
      <a href = "html/real_analysis/real_analysis.html"><img class="icon" src="${icon}" alt="${label}"></a>
    </div>
  `;
    
    container.appendChild(box);
});


