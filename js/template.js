function renderPage({ title, baseHref = "./", sidebars = [] }) {
    const template = document.getElementById("page-content");
    const bodyContent = template ? template.innerHTML : "";

    document.write(`
<html>
<head>
  <base href="${baseHref}">
  <title>${title}</title>
  <link rel="icon" type="image/png" sizes="32x32" href="img/equations/logo.png">
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Saira:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/style.css">

  <!-- KaTeX core CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css" integrity="sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP" crossorigin="anonymous">

  <!-- KaTeX core JS -->
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js" integrity="sha384-cMkvdD8LoxVzGF/RPUKAcvmm49FQ0oxwDF3BGKtDXcEc+T1b2N+teh/OJfpU0jr6" crossorigin="anonymous"></script>

  <!-- Auto-render extension with proper delimiters -->
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js" integrity="sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh" crossorigin="anonymous"
    onload="renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false }
      ]
    });">
  </script>
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
        <div class="title-style page-title">${title}</div>
      </div>
      ${bodyContent}
    </div>
  </div>

  <script src="js/ui/nav/populate_navbar.js"></script>
  ${sidebars.map(sb => sb.script ? `<script src="${sb.script}"></script>` : "").join("\n  ")}
</body>
</html>`);
}
