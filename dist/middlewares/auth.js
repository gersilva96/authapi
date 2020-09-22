"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isModerator = exports.verifyToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decodedToken, existingUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              error: {
                message: "Token no provisto"
              }
            }));

          case 4:
            decodedToken = _jsonwebtoken["default"].verify(token, _config.tokenConfig.SECRET);
            req.userId = decodedToken.id;
            _context.next = 8;
            return _User["default"].findById(req.userId, {
              password: 0
            }).populate("roles");

          case 8:
            existingUser = _context.sent;

            if (existingUser) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: {
                message: "El usuario no existe"
              }
            }));

          case 11:
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            res.status(401).json({
              error: {
                message: "No autorizado"
              }
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isModerator = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user, roles, i;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findById(req.userId).populate("roles");

          case 3:
            user = _context2.sent;
            _context2.next = 6;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 6:
            roles = _context2.sent;
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context2.next = 14;
              break;
            }

            if (!(roles[i].name === "moderator")) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", next());

          case 11:
            i++;
            _context2.next = 8;
            break;

          case 14:
            return _context2.abrupt("return", res.status(403).json({
              error: {
                message: "Requiere ser moderador"
              }
            }));

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            res.status(403).json({
              error: {
                message: "No tennés los permisos para realizar esta acción"
              }
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));

  return function isModerator(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isModerator = isModerator;

var isAdmin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var user, roles, i;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User["default"].findById(req.userId).populate("roles");

          case 3:
            user = _context3.sent;
            _context3.next = 6;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 6:
            roles = _context3.sent;
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context3.next = 14;
              break;
            }

            if (!(roles[i].name === "admin")) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", next());

          case 11:
            i++;
            _context3.next = 8;
            break;

          case 14:
            return _context3.abrupt("return", res.status(403).json({
              error: {
                message: "Requiere ser administrador"
              }
            }));

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            res.status(403).json({
              error: {
                message: "No tennés los permisos para realizar esta acción"
              }
            });

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 17]]);
  }));

  return function isAdmin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;