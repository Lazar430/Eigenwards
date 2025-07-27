const topics = [
    {
        label: "Matrix Factorizations",
        icon: "img/matrices/identity.svg",
        href: "html/linear_algebra/matrix_factorizations.html",
        description:
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nulla sem turpis, pulvinar eu dictum at, sagittis ac dui. 
Maecenas rutrum porta magna eu rutrum. Suspendisse non enim facilisis, 
efficitur est sed, consectetur est.`
    }
];

const container = document.getElementById("matrices-grid-container");

topics.forEach(({ label, icon, href, description }) => {
    const box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `
        <h1>${label}</h1>
        <div class="hover-layer">
            <a href="${href}"><img class="icon" src="${icon}" alt="${label}"></a>
        </div>
    `;

    const desc = document.createElement("p");
    desc.textContent = description;

    container.appendChild(box);
    container.appendChild(desc);
});
