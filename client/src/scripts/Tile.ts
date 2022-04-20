import { Vector3 } from 'three';
export default class Tile {
	pos: Vector3;
	constructor(pos) {
		this.x = x;
		this.y = y;
		this.color = 0x333333;
		this.isEmpty = true;
	}

	setColor(color) {
		this.color = color;
		this.isEmpty = false;
	}

	generate() {
		let geo = new PlaneGeometry(1, 1, 1, 1);
		let mat = new MeshBasicMaterial({ color: this.color, side: DoubleSide });
		let plane = new Mesh(geo, mat);
		plane.translateX(this.x);
		plane.translateZ(this.y);
		plane.rotateX(-Math.PI / 2);
		this.id = plane.id;
		return plane;
	}
}
