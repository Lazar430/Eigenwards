function populateNavbar(containerId, data) {
    const navbar = document.getElementById(containerId);
    if (!navbar) return;

    data.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "navsection";

        const navBox = document.createElement("div");
        navBox.className = "navbox";
        navBox.innerHTML = `<h1>${section.title}</h1>`;

        const submenu = document.createElement("div");
        submenu.className = "submenu";

        // Toggle submenu on navbox click
        navBox.addEventListener("click", () => {
            submenu.classList.toggle("open");
        });

        section.subtopics.forEach(sub => {
            const subBox = document.createElement("div");
            subBox.className = "subbox";

            // Support both string and object for subtopics
            if (typeof sub === "string") {
                subBox.textContent = sub;
            } else {
                const link = document.createElement("a");
                link.href = sub.href || "#";
                link.textContent = sub.title;
                link.style.color = "inherit";
                link.style.textDecoration = "none";
                subBox.appendChild(link);
            }

            submenu.appendChild(subBox);
        });

        sectionDiv.appendChild(navBox);
        sectionDiv.appendChild(submenu);
        navbar.appendChild(sectionDiv);
    });
}
