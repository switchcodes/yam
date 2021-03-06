import { GameEngine, Board } from "$scripts";
import NetworkManager from "$scripts/NetworkManager";
const screen = document.getElementById("app");
if (screen) {
	const ge = new GameEngine(screen);
	const board = new Board(ge.scene);
	board.generate();
	console.log(ge);
}
const nm = new NetworkManager();
nm.setup("http://localhost:8080");
nm.connect();
nm.sendMsg("test");
// const app = document.querySelector<HTMLDivElement>("#app");
