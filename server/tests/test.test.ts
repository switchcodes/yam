import { assert, expect, test } from "vitest";
import Room from "../src/Room";
const room = new Room();

test("RoomTestTest", () => {
	expect(room.addAI).toBeDefined();
	expect(room.join).toBeDefined();
	expect(room.leave).toBeDefined();
	expect(() => room.addAI()).toThrowError("addAI() not implemented.");
	expect(() => room.join("")).toThrowError("addAI() not implemented.");
	expect(() => room.leave("")).toThrowError("addAI() not implemented.");
});
