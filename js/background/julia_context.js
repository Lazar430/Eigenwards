const canvas = document.getElementById("julia");
const gl = canvas.getContext("webgl");

full_screen(canvas, gl);

const { vert, frag } = get_shaders(vert_src, frag_src); 

const program = get_program();

const vertices = new Float32Array([
    -1, -1,
    3, -1,
    -1,  3
]);

bind_buffer(vertices);


send_attribute("a_position", 2, gl.FLOAT, false, 0, 0);

const u_resolution = gl.getUniformLocation(program, "u_resolution");
gl.uniform2f(u_resolution, canvas.width, canvas.height);

