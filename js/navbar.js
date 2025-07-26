const mainMenuData = [
    {
        title: "Linear Algebra",
        subtopics: [
            { title: "Matrices", href: "html/matrices.html" },
            { title: "Vector Spaces", href: "html/vector_spaces.html" },
            { title: "Eigenvalues", href: "html/eigenvalues.html" }
        ]
    },
    {
        title: "Real Analysis",
        subtopics: [
            { title: "Limits", href: "html/limits.html" },
            { title: "Continuity", href: "html/continuity.html" },
            { title: "Differentiation", href: "html/differentiation.html" }
        ]
    }
];


populateNavbar("navbar-main", mainMenuData);
