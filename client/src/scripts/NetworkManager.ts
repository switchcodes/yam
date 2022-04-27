import io, { Socket } from "socket.io-client";

export default class NetworkManager {
	socket: any;
	constructor() {}

	setup = (url: string) => {
		this.socket = io(url, {
			withCredentials: false,
			reconnectionDelayMax: 10000,
			// authConnect: false,
			auth: {
				token: "123",
			},
			query: {
				"my-key": "my-value",
			},
			transportOptions: {
				polling: {
					extraHeaders: {
						"my-custom-header": "value",
					},
				},
			},
			// transports: ["websocket"],
			// enabledTransports: ['ws', 'wss']
		});

		this.socket.on("connect", () => {
			console.log("connected");
			console.log("ID: ", this.socket.id);
			console.log("Connected: ", this.socket.connected);
			console.log("Disconnected: ", this.socket.disconnected);
		});

		this.socket.on("connection", (socket: any) => {
			console.log("connection");
		});

		this.socket.on("error", (err: any) => {
			console.error(err);
		});

		this.socket.on("disconnect", () => {
			console.log("disconnected");
			console.log("ID: ", this.socket.id);
			console.log("Connected: ", this.socket.connected);
			console.log("Disconnected: ", this.socket.disconnected);
			// socket.connect();
		});

		// this.socket.onAny((event, ...args) => {
		// 	console.log(`got ${event}`);
		// });

		this.socket.on("reconnect", (attempt: any) => {
			console.log("reconnect", attempt);
		});

		this.socket.on("reconnect_attempt", (attempt: any) => {
			console.log("reconnect_attempt", attempt);
		});

		this.socket.on("reconnect_error", (error: any) => {
			console.error("reconnect_error", error);
		});

		this.socket.on("reconnect_failed", () => {
			console.error("reconnect_failed");
		});

		this.socket.on("ping", () => {
			console.log("ping");
		});

		this.socket.on("msg", (msg: any, cb: any) => {
			console.log("MSG", msg);
			cb("OK");
		});
	};

	connect = () => {
		this.socket.connect();
	};

	joinDefaultRoom = () => {
		this.socket.emit("join", { room: "/" }, (data: any) => {
			console.log(data);
		});
	};

	getRooms = () => {
		return new Promise((resolve, reject) => {
			this.socket.emit("get_rooms", (data: any) => {
				resolve(data);
			});
		});
	};

	joinRoom = (roomName: any) => {
		this.socket.emit("join", { room: roomName });
	};

	disconnect = () => {
		this.socket.disconnect();
	};

	sendMsg = (message: any) => {
		this.socket.emit("msg", message, (msg: any, cb: any) => {
			console.log("MSG", msg);
			cb("OK");
		});
	};
}
