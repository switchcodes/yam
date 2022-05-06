precision highp float;

uniform sampler2D tex;
// uniform vec2;

// in vec4 color;
in vec3 vertexNormal;
in vec3 normals;
in vec2 vUv;

out vec4 outColor;

void main() {
   // vec4 c = color;
   vec4 c = vec4(0.64, 0.64, 0.64, 1.0);
   if(normals.y > 0.9) {
      c = vec4(texture(tex, vec2(vUv.y, vUv.x)).rgb, 1.0);
   //    // c = vec4(1.0, 0.0, 0.0, 1.0);
   }
   outColor = vec4(c);
}