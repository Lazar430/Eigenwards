const topics = [
    { label: "LU Factorization", icon: "img/matrices/LU.svg",
      href: "html/linear_algebra/factorizations/lu.html" },
    
    { label: "Eigenvalue Decomposition", icon: "img/matrices/eigen.svg",
      href: "html/linear_algebra/factorizations/eigen.html" },
    
    { label: "QR Factorization", icon: "img/matrices/QR.svg",
      href: "html/linear_algebra/factorizations/qr.html" },
    
    { label: "Cholesky Factorization", icon: "img/matrices/Cholesky.svg",
      href: "html/linear_algebra/factorizations/cholesky.html" },
    
    { label: "Singular Value Decomposition", icon: "img/matrices/svd_icon.svg",
      href: "html/linear_algebra/factorizations/svd.html" },
    
    { label: "Schur Decomposition", icon: "img/matrices/Schur.svg",
      href: "html/linear_algebra/factorizations/schur.html" },
    
    { label: "Full Rank Decomposition", icon: "img/matrices/Full_Rank.svg",
      href: "html/linear_algebra/factorizations/rank.html" },
    
    { label: "Jordan Form", icon: "img/icons/gaussian.svg",
      href: "html/linear_algebra/factorizations/jordan.html" },
    
    { label: "Spectral Decomposition", icon: "img/basic_shapes/square.svg",
      href: "html/linear_algebra/factorizations/spectral.html" },
];

const container = document.getElementById("grid-container");

topics.forEach( ({label, icon, href} ) => {
    const box = document.createElement("div");
    box.className = "box";
    
    box.innerHTML = `
    <h1>${label}</h1>
    <div class="hover-layer">
      <a href = "${href}"><img class="icon" src="${icon}" alt="${label}"></a>
    </div>
  `;
    
    container.appendChild(box);
});
