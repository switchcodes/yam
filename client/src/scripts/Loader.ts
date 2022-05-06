import { LoadingManager } from "three";
export default class Loader {
	man: LoadingManager;
	constructor() {
		this.man = new LoadingManager();
	}
}
