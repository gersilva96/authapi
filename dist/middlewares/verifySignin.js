"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkExistingRoles = exports.checkDuplicatedUsernameOrEmail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var validRoles = ["admin", "moderator", "user"];

var checkDuplicatedUsernameOrEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var username, email;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findOne({
              username: req.body.username
            });

          case 2:
            username = _context.sent;

            if (!username) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: {
                message: "El nombre de usuario ya existe"
              }
            }));

          case 5:
            _context.next = 7;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 7:
            email = _context.sent;

            if (!email) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: {
                message: "El email ya existe"
              }
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkDuplicatedUsernameOrEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicatedUsernameOrEmail = checkDuplicatedUsernameOrEmail;

var checkExistingRoles = function checkExistingRoles(req, res, next) {
  var roles = req.body.roles;

  if (roles) {
    for (var i = 0; i < roles.length; i++) {
      if (!validRoles.includes(roles[i])) {
        return res.status(400).json({
          error: {
            message: "El rol ".concat(roles[i], " no es v\xE1lido")
          }
        });
      }
    }
  }

  next();
};

exports.checkExistingRoles = checkExistingRoles;