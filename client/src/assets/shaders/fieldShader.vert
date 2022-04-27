// layout(location = 0) in vec3 pos;
// layout(location = 1) in vec3 normal;

out vec2 vUv;
// out vec4 color;
out vec3 vertexNormal;
out vec3 normals;

void main() {
  // color = vec4(0.0, 0.0, 0.0, 1.0);
  vUv = uv;
  normals = normal;
  vertexNormal = normalize(normalMatrix * normal);
  // color = vec4(abs(normal), 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// varying vec2 vUv;
// varying vec3 vertexNormal;

// void main() {
//   vUv = uv;
//   vertexNormal = normalize(normalMatrix * normal);
//   vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//   gl_Position = projectionMatrix * mvPosition;
// }
// #version 300 es

// varying vec2 vertexUV;
// varying vec3 vertexNormal;
// void main() {
//   vertexUV = uv;
//   vertexNormal = normalize(normalMatrix * normal);
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }
