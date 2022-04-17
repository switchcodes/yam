import express from "express";

const app = express();
import http from "http";
const server = http.createServer(app);

server.listen(3000, () => {
	console.log("listening on *:3000");
});

app.get("/", (req, res) => {
	res.send("<h1>Hello world</h1>");
});

export const yam = app;
