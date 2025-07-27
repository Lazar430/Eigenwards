const factorizationsData = [
    {
        title: "Tier I",
        subtopics: [
            { title: "LU", href: "html/lu.html" },
            { title: "QR", href: "html/qr.html" },
            { title: "Cholesky", href: "html/cholesky.html" }
        ]
    },
    {
        title: "Tier II",
        subtopics: [
            { title: "SVD", href: "html/svd.html" },
            { title: "Schur", href: "html/schur.html" },
            { title: "Jordan", href: "html/jordan.html" },
            { title: "Spectral", href: "html/spectral.html" }
        ]
    }
];

populateNavbar("navbar-factorizations", factorizationsData);
