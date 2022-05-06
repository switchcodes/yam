import { Socket } from "socket.io";

export default (socket: Socket) => {
	return () => {
		console.log("join Event Called");
		console.log(socket);
	};
};

/*(socket) => {
	console.log(ioServer.sockets);
	console.log("connection");

	manager.createLobby("testLobby", 10);

	manager.getLobby("testLobby")?.addUser(new User("client_" + socket.handshake.address, socket.id));

	console.log("Lobbies", manager.lobbies);
	console.log("Users", manager.lobbies[0].users);

	socket.emit("msg", "Welcome " + manager.getLobby("testLobby")?.users[0].name, (response: any) => {
		console.log(manager.getLobby("testLobby")?.users[0].name + " responded with: " + response);

		manager.getLobby("testLobby")?.removeUser(manager.getLobby("testLobby")?.users[0]!);

		console.log("Lobbies", manager.lobbies);
		console.log("Users", manager.lobbies[0].users);

		manager.deleteLobby("testLobby");

		console.log("Lobbies", manager.lobbies);

		socket.disconnect(true);
	});
}*/
