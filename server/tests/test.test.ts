import { assert, expect, test } from "vitest";
import Lobby from "../src/Lobby";
import { LobbyState } from "../src/LobbyState";

const lobby = new Lobby("testRoom", 5);

test("LobbyTest", () => {
	expect(lobby.getState()).toBe(LobbyState.CREATING);
	expect(lobby.getMaxUsers()).toBe(5);
	expect(lobby.getUser("test")).toBe(undefined);
	expect(lobby.addAI).toBeDefined();
	expect(lobby.join).toBeDefined();
	expect(lobby.leave).toBeDefined();
	expect(() => lobby.addAI()).toThrowError("addAI() not implemented.");
	expect(() => lobby.join("")).toThrowError("addAI() not implemented.");
	expect(() => lobby.leave("")).toThrowError("addAI() not implemented.");
});
