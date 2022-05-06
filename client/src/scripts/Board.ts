import {
	BoxGeometry,
	Mesh,
	MeshBasicMaterial,
	Scene,
	TextureLoader,
	SphereGeometry,
	ShaderMaterial,
	LoaderUtils,
	Loader,
	FileLoader,
	GLSL3,
	RawShaderMaterial,
} from "three";
export default class Board {
	scene: Scene;
	loader: TextureLoader;
	constructor(scene: Scene) {
		this.scene = scene;
		this.loader = new TextureLoader();
	}

	generate = () => {
		let geo = new BoxGeometry(2, 0.25, 1);
		let mat = new MeshBasicMaterial({ color: 0xffffff });
		let mesh = new Mesh(geo, mat);
		mesh.translateX(0);
		mesh.translateY(0.125);
		mesh.translateZ(0);
		mesh.rotateY(Math.PI / 2);
		this.scene.add(mesh);
		console.log("ee");
		this.loader.load(
			"./src/assets/board/0.png",
			(texture) => {
				const fl = new FileLoader();
				fl.load("./src/assets/shaders/testvert.vert", (vert) => {
					fl.load("./src/assets/shaders/testfrag.frag", (frag) => {
						console.log("texture loaded");
						const material_shh = new ShaderMaterial({
							// uniforms: { tex: { value: texture } },
							vertexShader: vert.toString(),
							fragmentShader: frag.toString(),
							glslVersion: GLSL3,
						});
						//@ts-ignore
						mesh.material = material_shh;
						mesh.material.needsUpdate = true;
					});
				});
			},
			(xhr) => {
				console.log("texture loading...", (xhr.loaded / xhr.total) * 100 + "% loaded");
			}
		);
	};
}
