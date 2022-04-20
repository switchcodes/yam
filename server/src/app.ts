import express from "express";
import { Server } from "socket.io";
import http from "http";
import LobbyMananger from "./LobbyManager";
import User from "./User";

const app = express();
const httpServer = http.createServer(app);
const ioServer = new Server(httpServer);

let manager: LobbyMananger = new LobbyMananger();

ioServer.on("connection", (socket) => {
	manager.createLobby("testLobby",10);

	manager.getLobby("testLobby").addUser(new User("client_"+socket.handshake.address, socket));

	console.log("Lobbies", manager.lobbies);
	console.log("Users", manager.lobbies[0].users);

	socket.emit("Welcome " + manager.getLobby("testLobby").users[0].name, (response) => {
		console.log(manager.getLobby("testLobby").users[0].name +" responded with: " + response);

		manager.getLobby("testLobby").removeUser(manager.getLobby("testLobby").users[0]);

		console.log("Lobbies", manager.lobbies);
		console.log("Users", manager.lobbies[0].users);

		manager.deleteLobby("testLobby");

		console.log("Lobbies", manager.lobbies);
		
		socket.disconnect(true);
	});
});

app.get("/", (req, res) => {
	res.send("<div style='height:100%; width: 100%; display: grid; place-items: center;'><div style='height:100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;'><h1 style='font-size: 5em; font-weight: 600;'>Welcome to the Server API</h1><p style='font-size: 2em; font-weight: 200;'>Please connect to this server with the help of a (socket.io) socket connection.</p></div></div>");
});

httpServer.listen(3000, () => {
	console.log("listening on *:3000");
});

export const yam = app;
