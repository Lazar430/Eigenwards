const matricesData = [
    {
        title: "Introduction",
        subtopics: [
            { title: "??", href: "html/linear_algebra/matrices.html" },
        ]
    },
    
    {
        title: "Factorizations",
        subtopics: [
	    { title: "Home", href: "html/linear_algebra/matrix_factorizations.html" },
            { title: "LU", href: "html/linear_algebra/factorizations/lu.html" },
            { title: "Eigen Value Decomposition", href: "html/linear_algebra/factorizations/eigen.html" },
	    { title: "QR Factorization", href: "html/linear_algebra/factorizations/qr.html" },
	    { title: "Cholesky Factorization", href: "html/linear_algebra/factorizations/cholesky.html" },
	    { title: "Singular Value Decomposition", href: "html/linear_algebra/factorizations/svd.html" },
	    { title: "Schur Decomposition", href: "html/linear_algebra/factorizations/schur.html" },
	    { title: "Full Rank Decomposition", href: "html/linear_algebra/factorizations/rank.html" },
	    { title: "Jordan Form", href: "html/linear_algebra/factorizations/jordan.html" },
	    { title: "Spectral Decomposition", href: "html/linear_algebra/factorizations/spectral.html" }
        ]
    }
];

populateNavbar("navbar-matrix", matricesData);
