"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../controllers/auth.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post("/signup", [_middlewares.signIn.checkDuplicatedUsernameOrEmail, _middlewares.signIn.checkExistingRoles], _auth["default"].signup);
router.post("/signin", _auth["default"].signin);
var _default = router;
exports["default"] = _default;