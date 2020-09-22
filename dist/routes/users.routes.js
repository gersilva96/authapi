"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("../controllers/users.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/", _middlewares.auth.verifyToken, _users["default"].getUsers);
var _default = router;
exports["default"] = _default;