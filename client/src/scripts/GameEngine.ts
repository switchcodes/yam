import { Scene, PerspectiveCamera, WebGLRenderer, Vector2 } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
// import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
// import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createLines, addResize } from "./helperFunctions.js";

export default class Game {
	screen: HTMLElement;
	scene: Scene;
	camera: PerspectiveCamera;
	renderer: WebGLRenderer;
	composer: EffectComposer;
	constructor(screen: HTMLElement | null) {
		if (!screen) throw new Error("Screen needs to be defined in the DOM");
		this.screen = screen;
		this.scene = new Scene();
		this.camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.renderer = new WebGLRenderer({ antialias: true }); // antialias sharpen rendering
		this.renderer.setSize(this.screen.offsetWidth, this.screen.offsetHeight);
		this.renderer.setPixelRatio(window.devicePixelRatio); // sharpen rendering
		this.screen.appendChild(this.renderer.domElement);
		createLines(this.scene);
		this.camera.position.z = 5;
		this.camera.position.y = 2;

		this.composer = new EffectComposer(this.renderer);
		addResize(this.camera, this.renderer, this.composer);

		const renderPass = new RenderPass(this.scene, this.camera);
		this.composer.addPass(renderPass);

		// const fxaaPass = new ShaderPass(FXAAShader);
		// this.composer.addPass(fxaaPass);

		const bloomPass = new UnrealBloomPass(
			new Vector2(window.innerWidth, window.innerHeight),
			1.5,
			0.4,
			0.85
		);
		bloomPass.threshold = 0;
		bloomPass.strength = 1.5;
		bloomPass.radius = 0.3;
		this.composer.addPass(bloomPass);

		const controls = new OrbitControls(this.camera, this.renderer.domElement);
		controls.maxPolarAngle = Math.PI * 0.5;
		controls.minDistance = 1;
		controls.maxDistance = 10;

		this.animate();
	}

	animate() {
		const animate = () => {
			requestAnimationFrame(animate);

			this.composer.render();
		};
		animate();
	}
}
