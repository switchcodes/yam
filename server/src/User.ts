import { Socket } from "socket.io";

export default class User {
	name: string;
	connection: string;

	constructor(name: string, connection: string) {
		this.name = name;
		this.connection = connection;
	}
}
