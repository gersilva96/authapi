"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = _interopRequireDefault(require("../controllers/products.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/", _products["default"].getProducts);
router.get("/:id", _products["default"].getProductById);
router.post("/", [_middlewares.auth.verifyToken, _middlewares.auth.isModerator], _products["default"].createProduct);
router.put("/:id", [_middlewares.auth.verifyToken, _middlewares.auth.isAdmin], _products["default"].updateProductById);
router["delete"]("/:id", [_middlewares.auth.verifyToken, _middlewares.auth.isAdmin], _products["default"].deleteProductById);
var _default = router;
exports["default"] = _default;