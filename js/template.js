function renderPage({ title, baseHref = "./", sidebars = [] }) {
    const template = document.getElementById("page-content");
    const bodyContent = template ? template.innerHTML : "";

    document.write(`<!DOCTYPE html>
<html>
<head>
  <base href="${baseHref}">
  <title>${title}</title>
  <link rel="icon" type="image/png" sizes="32x32" href="img/equations/logo.png">
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Saira:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <canvas id="julia"></canvas>

  <script src="js/background/webgl.js"></script>
  <script src="js/background/julia_shaders.js"></script>
  <script src="js/background/julia_context.js"></script>
  <script src="js/background/julia.js"></script>

  <a href="index.html"><h1 class="title-style site-title">Eigenwards</h1></a>

  <div class="layout">
    <div class="sidebar">
      ${sidebars.map(sb => `
		   <div class="menu-wrapper" id="${sb.id}-wrapper">
		   <div class="menu-button"><h1>${sb.label}</h1></div>
		   <div class="navbar" id="navbar-${sb.id}"></div>
		   </div>
		   `).join("")}
    </div>

    <div class="stack">
      <div class="container">
        <h1 class="title-style page-title">${title}</h1>
      </div>
      ${bodyContent}
    </div>
  </div>

  <script src="js/ui/nav/populate_navbar.js"></script>
  ${sidebars.map(sb => sb.script ? `<script src="${sb.script}"></script>` : "").join("\n  ")}
</body>
</html>`);
}
