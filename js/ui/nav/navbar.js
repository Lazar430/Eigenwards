const mainMenuData = [
    {
        title: "Linear Algebra",
        subtopics: [
	    { title: "Home", href: "html/linear_algebra/linear_algebra.html" },
            { title: "Matrices", href: "html/linear_algebra/matrices.html" },
            { title: "Vector Spaces", href: "html/linear_algebra/linear_algebra.html" },
            { title: "Eigenvalues", href: "html/linear_algebra/linear_algebra.html" }
        ]
    },
    {
        title: "Real Analysis",
        subtopics: [
            { title: "Limits", href: "html/real_analysis/real_analysis.html" },
            { title: "Continuity", href: "html/real_analysis/real_analysis.html" },
            { title: "Differentiation", href: "html/real_analysis/real_analysis.html" }
        ]
    }
];


populateNavbar("navbar-main-menu", mainMenuData);
