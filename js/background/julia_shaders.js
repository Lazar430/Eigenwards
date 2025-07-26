const vert_src = `
attribute vec2 a_position;
      void main() {
	  gl_Position = vec4(a_position, 0.0, 1.0);
      }
`;

frag_src = `
precision mediump float;

      uniform vec2 u_resolution;
      uniform vec2 u_c;

      const int iterations = 20;
      float radius = 4.0;
      
      bool escape_condition(vec2 z){
	  for(int i = 0; i < iterations; ++i){
	      z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + u_c;
              if(dot(z, z) > radius) return true;
	  }

	  return false;
      }

      void main() {
	  vec2 z = gl_FragCoord.xy / u_resolution;
	  z = z * 2.0 - 1.0;
	  z.x *= u_resolution.x / u_resolution.y;

	  if (!escape_condition(z)) {
              gl_FragColor = vec4(198.0 / 255.0, 40.0 / 255.0, 40.0 / 255.0, 1.0); 
	  } else {
              discard; 
	  }
      }
`;
