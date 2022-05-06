import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import routes from "./Routes";
// import LobbyMananger from "./LobbyManager";
// import User from "./User";

const app = express();
app.use(
	cors({
		origin: ["http://localhost:3000", "http://localhost:3001"],
	})
);
const httpServer = http.createServer(app);
const ioServer = new Server(httpServer, {
	// transports: ["websocket"],
	cors: {
		//@ts-ignore
		origins: ["http://localhost:3000", "http://localhost:3001"],
		handlePreflightRequest: (req: any, res: any) => {
			res.writeHead(200, {
				"Access-Control-Allow-Origin": "http://localhost:3000, http://localhost:3001",
				"Access-Control-Allow-Methods": "GET,POST",
				"Access-Control-Allow-Headers": "my-custom-header",
				"Access-Control-Allow-Credentials": true,
			});
			res.end("ok");
		},
	},
});

// const domain = "localhost";
// const port = 3001;
// const httpServer = http.createServer(app);
// httpServer.listen(port, domain);
// const ioServer = Server.listen(httpServer, { transports: ["websocket"] });

// let manager: LobbyMananger = new LobbyMananger();

ioServer.on("connection", routes);

ioServer.on("join", (socket) => {
	console.log("join Event Called TOP LEVEL");
	console.log("ServerSocket", ioServer.sockets);
	console.log("Socket", socket);
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
});

app.get("/", (req, res) => {
	res.send(
		"<div style='height:100%; width: 100%; display: grid; place-items: center;'><div style='height:100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;'><h1 style='font-size: 5em; font-weight: 600;'>Welcome to the Server API</h1><p style='font-size: 2em; font-weight: 200;'>Please connect to this server with the help of a (socket.io) socket connection.</p></div></div>"
	);
});

httpServer.listen(8080, () => {
	console.log("listening on *:8080");
});
