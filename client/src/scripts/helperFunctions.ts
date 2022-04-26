import {
	Line,
	LineBasicMaterial,
	BufferGeometry,
	Vector3,
	Scene,
	WebGLRenderer,
	PerspectiveCamera,
} from "three";
import type { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";

export function createLines(scene: Scene) {
	const lineX = new Line(
		new BufferGeometry().setFromPoints([new Vector3(0, 0, 0), new Vector3(1000, 0, 0)]),
		new LineBasicMaterial({ color: 0xff0000 })
	);
	scene.add(lineX);
	const lineY = new Line(
		new BufferGeometry().setFromPoints([new Vector3(0, 0, 0), new Vector3(0, 1000, 0)]),
		new LineBasicMaterial({ color: 0x00ff00 })
	);
	scene.add(lineY);
	const lineZ = new Line(
		new BufferGeometry().setFromPoints([new Vector3(0, 0, 0), new Vector3(0, 0, 1000)]),
		new LineBasicMaterial({ color: 0x0000ff })
	);
	scene.add(lineZ);
	const lbm = new LineBasicMaterial({ color: 0x777777 });
	lbm.linewidth = 10;
	for (let i = 1; i <= 10; i++) {
		let grid = new Line(
			new BufferGeometry().setFromPoints([new Vector3(0, 0, i), new Vector3(10, 0, i)]),
			lbm
		);
		scene.add(grid);
		grid = new Line(
			new BufferGeometry().setFromPoints([new Vector3(i, 0, 0), new Vector3(i, 0, 10)]),
			lbm
		);
		scene.add(grid);
	}
}

export function addResize(
	camera: PerspectiveCamera,
	renderer: WebGLRenderer,
	composer: EffectComposer
) {
	window.addEventListener("resize", () => {
		const ratio = window.devicePixelRatio;
		renderer.setPixelRatio(ratio);
		// const el = document.getElementById("body");
		const width = window.innerWidth;
		const height = window.innerHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
		composer.setSize(width, height);

		console.log(width, height);
		// setCanvasDimensions(renderer.domElement, width, height);
	});

	// function setCanvasDimensions(canvas, width, height, set2dTransform = false) {
	// 	canvas.width = width;
	// 	canvas.height = height;
	// 	canvas.style.width = `${width}px`;
	// 	canvas.style.height = `${height}px`;
	// 	if (set2dTransform) {
	// 		canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
	// 	}
	// }
}
