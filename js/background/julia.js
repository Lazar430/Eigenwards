color = [ 0.1, 0.1, 0.4, 1.0 ];


const presets = [
    [-0.8, 0.156],
    [-0.4, 0.6],
    [-0.123, 0.745],
    [-0.729, 0.1889],
    [0.285, 0],
    [-0.75, 0],
    [0.355, 0.355]
];

const u_c = gl.getUniformLocation(program, "u_c");

let JuliaSet = Math.floor(Math.random() * presets.length);

let time = 0;

let lastTime = 0;
const fps = 15;
const frameDuration = 1000 / fps;

function animate(now) {
    if (now - lastTime >= frameDuration) {
        lastTime = now;
        const [baseCx, baseCy] = presets[JuliaSet];
        const wiggle = 0.02;
        const speed = 0.03;
        const cx = baseCx + Math.cos(time * speed) * wiggle;
        const cy = baseCy + Math.sin(time * speed) * wiggle;
        time++;

	gl.uniform2f(u_c, cx, cy);

	clear_and_draw(color, gl.TRIANGLES, 0, 3);
    }
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
