"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../models/Product"));

var productsController = {
  getProducts: function () {
    var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var products;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _Product["default"].find();

            case 3:
              products = _context.sent;
              res.json(products);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(400).json({
                error: _context.t0
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function getProducts(_x, _x2) {
      return _getProducts.apply(this, arguments);
    }

    return getProducts;
  }(),
  getProductById: function () {
    var _getProductById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var product;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _Product["default"].findById(req.params.id);

            case 3:
              product = _context2.sent;
              res.json(product);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              res.status(400).json({
                error: _context2.t0
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    function getProductById(_x3, _x4) {
      return _getProductById.apply(this, arguments);
    }

    return getProductById;
  }(),
  createProduct: function () {
    var _createProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _req$body, name, category, price, imgURL, newProduct, savedProduct;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, imgURL = _req$body.imgURL;
              newProduct = new _Product["default"]({
                name: name,
                category: category,
                price: price,
                imgURL: imgURL
              });
              _context3.next = 5;
              return newProduct.save();

            case 5:
              savedProduct = _context3.sent;
              res.status(201).json(savedProduct);
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              res.status(400).json({
                error: _context3.t0
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    function createProduct(_x5, _x6) {
      return _createProduct.apply(this, arguments);
    }

    return createProduct;
  }(),
  updateProductById: function () {
    var _updateProductById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var updatedProduct;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _Product["default"].findByIdAndUpdate(req.params.id, req.body, {
                "new": true
              });

            case 3:
              updatedProduct = _context4.sent;
              res.json(updatedProduct);
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              res.status(400).json({
                error: _context4.t0
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    function updateProductById(_x7, _x8) {
      return _updateProductById.apply(this, arguments);
    }

    return updateProductById;
  }(),
  deleteProductById: function () {
    var _deleteProductById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var deletedProduct;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _Product["default"].findByIdAndDelete(req.params.id);

            case 3:
              deletedProduct = _context5.sent;
              res.json(deletedProduct);
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              res.status(400).json({
                error: _context5.t0
              });

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    function deleteProductById(_x9, _x10) {
      return _deleteProductById.apply(this, arguments);
    }

    return deleteProductById;
  }()
};
var _default = productsController;
exports["default"] = _default;