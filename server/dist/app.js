"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yam = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const LobbyManager_1 = __importDefault(require("./LobbyManager"));
const User_1 = __importDefault(require("./User"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost:3001"],
}));
const httpServer = http_1.default.createServer(app);
const ioServer = new socket_io_1.Server(httpServer, {
    // transports: ["websocket"],
    cors: {
        //@ts-ignore
        origins: ["http://localhost:3000", "http://localhost:3001"],
        handlePreflightRequest: (req, res) => {
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
let manager = new LobbyManager_1.default();
ioServer.on("connection", (socket) => {
    var _a, _b;
    console.log(ioServer.sockets);
    console.log("connection");
    manager.createLobby("testLobby", 10);
    (_a = manager.getLobby("testLobby")) === null || _a === void 0 ? void 0 : _a.addUser(new User_1.default("client_" + socket.handshake.address, socket));
    console.log("Lobbies", manager.lobbies);
    console.log("Users", manager.lobbies[0].users);
    socket.emit("msg", "Welcome " + ((_b = manager.getLobby("testLobby")) === null || _b === void 0 ? void 0 : _b.users[0].name), (response) => {
        var _a, _b, _c;
        console.log(((_a = manager.getLobby("testLobby")) === null || _a === void 0 ? void 0 : _a.users[0].name) + " responded with: " + response);
        (_b = manager.getLobby("testLobby")) === null || _b === void 0 ? void 0 : _b.removeUser((_c = manager.getLobby("testLobby")) === null || _c === void 0 ? void 0 : _c.users[0]);
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
httpServer.listen(8080, () => {
    console.log("listening on *:8080");
});
exports.yam = app;
