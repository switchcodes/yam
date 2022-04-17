"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var express = require("express");
var http = require("http");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var express__default = /* @__PURE__ */ _interopDefaultLegacy(express);
var http__default = /* @__PURE__ */ _interopDefaultLegacy(http);
const app = express__default["default"]();
const server = http__default["default"].createServer(app);
server.listen(3e3, () => {
  console.log("listening on *:3000");
});
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
const yam = app;
exports.yam = yam;
