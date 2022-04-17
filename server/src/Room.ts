import { randomUUID } from "crypto";
export default class Room {
	constructor() {
		// //todo check random UUID
		// this.id = randomUUID();
		// this.name = "test";
		// this.users = [];
		// this.userCount = 0;
		// this.maxUsers = 4;
		// this.state = "WAITING";
	}

	addAI = () => {
		throw new Error("addAI() not implemented.");
	};

	join = (user) => {
		throw new Error("addAI() not implemented.");
	};

	leave = (user) => {
		throw new Error("addAI() not implemented.");
	};
}
