import { Socket } from "socket.io";
import joinHandler from "./Handlers/joinHandler";
export default (socket: Socket) => {
	console.log(`${socket.id} connected`);
	socket.on("join", joinHandler(socket));
};
