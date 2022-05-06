
uniform vec2    u_resolution;
uniform float   u_time;

void main() {
    vec3 color = vec3(0.0); 
    vec2 st = gl_FragCoord.xy / u_resolution;
    
    color.rg = st;
    color.b = abs(sin(u_time));

    gl_FragColor = vec4(color, 1.0);
}
