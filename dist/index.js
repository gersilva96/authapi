"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

_app["default"].listen(process.env.PORT, function () {
  console.log("Server listen on port", process.env.PORT);
});