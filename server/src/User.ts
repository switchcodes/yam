import { Socket } from "socket.io";

export default class User {
	name: string;
    connection: Socket;

	constructor(name: string, connection: Socket) {
		this.name = name;
		this.connection = connection;
	}
}

