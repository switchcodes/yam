import { Group, Vector3 } from 'three';

export default class Board {
	position: Vector3;
	config: any;
	constructor(config: any, pos: Vector3) {
		this.position = pos ?? new Vector3(0, 0, 0);
		this.config = config ?? {};
	}

	generate = () => {
		console.log('generate');
	};

	// create() {
	// 	return this.generateLogicBoard(this.tilesX, this.tilesY);
	// }

	// generateLogicBoard = (tilesX, tilesY) => {
	// 	this.board = [];
	// 	for (let x = 0; x < tilesX; x++) {
	// 		this.board.push([]);
	// 		for (let y = 0; y < tilesY; y++) {
	// 			let tile = new Tile(x * this.tileSize, y * this.tileSize);
	// 			this.board[x].push(tile);
	// 		}
	// 	}
	// 	return this.board;
	// };

	// generate = (tileSize) => {
	// 	let g = new Group();
	// 	for (let x = 0; x < this.tilesX; x++) {
	// 		for (let y = 0; y < this.tilesY; y++) {
	// 			g.add(this.board[x][y].generate(tileSize));
	// 		}
	// 	}
	// 	return g;
	// };
}
