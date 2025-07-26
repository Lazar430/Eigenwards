const full_screen = (canvas, gl) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
};

const compile_shader = (type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

const compile_shaders = (vert_src, frag_src) => {
    const vert = compile_shader(gl.VERTEX_SHADER, vert_src);
    const frag = compile_shader(gl.FRAGMENT_SHADER, frag_src);

    return { vert, frag };
}

const get_shaders = (vert_src, frag_src) => {
    const { vert, frag } = compile_shaders(vert_src, frag_src);

    return { vert, frag };
}

const get_program = () => {
    const program = gl.createProgram();
    
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    
    gl.linkProgram(program);
    gl.useProgram(program);

    return program;
};

const bind_buffer = (data) => {
    const buffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
}


const send_attribute = (name, chunk_size, type, normalize, stride, offset) => {
    const attribute = gl.getAttribLocation(program, name);
    gl.enableVertexAttribArray(attribute);
    gl.vertexAttribPointer(attribute, chunk_size, type, normalize, stride, offset);
};


const clear_and_draw = (color, mode, first, count) => {
    gl.clearColor(color[0], color[1], color[2], color[3]); 
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(mode, first, count);
};
