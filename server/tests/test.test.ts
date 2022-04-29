import { expect, test } from "vitest";
import { LobbyState } from "../src/LobbyState";
import Lobby from "../src/Lobby";
import User from "../src/User";

const lobby = new Lobby("testRoom", 5);
const user = new User("testUser", "testConnection");

test("LobbyTest", () => {
	expect(lobby.getState()).toBe(LobbyState.CREATING);
	expect(lobby.getMaxUsers()).toBe(5);
	expect(lobby.getUser("test")).toBe(null);
	expect(lobby.addAI).toBeDefined();
	expect(lobby.join).toBeDefined();
	expect(lobby.leave).toBeDefined();
	expect(() => lobby.addAI()).toThrowError("addAI() not implemented.");
	expect(() => lobby.join(user)).toThrowError("addAI() not implemented.");
	expect(() => lobby.leave(user)).toThrowError("addAI() not implemented.");
});
