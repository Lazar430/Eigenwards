const topics = [
    { label: "LU Factorization", icon: "../img/matrices/LU.svg" },
    { label: "Eigenvalue Decomposition", icon: "../img/matrices/eigen.svg" },
    { label: "QR Factorization", icon: "../img/matrices/QR.svg" },
    { label: "Cholesky Factorization", icon: "../img/matrices/Cholesky.svg" },
    { label: "Singular Value Decomposition", icon: "../img/matrices/svd_icon.svg" },
    { label: "Schur Decomposition", icon: "../img/matrices/Schur.svg" },
    { label: "Full Rank Decomposition", icon: "../img/matrices/Full_Rank.svg" },
    { label: "Jordan Form", icon: "../img/icons/gaussian.svg" },
    { label: "Spectral Decomposition", icon: "../img/basic_shapes/square.svg" }
];

const container = document.getElementById("grid-container");

topics.forEach( ({label, icon} ) => {
    const box = document.createElement("div");
    box.className = "box_1";
    
    box.innerHTML = `
    <h1>${label}</h1>
    <div class="hover-layer">
      <a href = "../html/svd.html"><img class="icon" src="${icon}" alt="${label}"></a>
    </div>
  `;
    
    container.appendChild(box);
});
