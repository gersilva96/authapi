"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("./config");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _initialSetup = require("./libs/initialSetup");

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

require("regenerator-runtime");

var _dotenv = _interopRequireDefault(require("dotenv"));

(0, _config.initialConfig)();
var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.set("pkg", _package["default"]);

_dotenv["default"].config();

app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
app.use("/api/v1/products", _products["default"]);
app.use("/api/v1/auth", _auth["default"]);
app.use("/api/v1/users", _users["default"]);
var _default = app;
exports["default"] = _default;