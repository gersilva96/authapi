"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

var _Role = _interopRequireDefault(require("../models/Role"));

var authController = {
  signup: function () {
    var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, username, email, password, roles, newUser, foundRoles, role, savedUser, token;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
              _context.t0 = _User["default"];
              _context.t1 = username;
              _context.t2 = email;
              _context.next = 7;
              return _User["default"].encryptPassword(password);

            case 7:
              _context.t3 = _context.sent;
              _context.t4 = {
                username: _context.t1,
                email: _context.t2,
                password: _context.t3
              };
              newUser = new _context.t0(_context.t4);

              if (!roles) {
                _context.next = 17;
                break;
              }

              _context.next = 13;
              return _Role["default"].find({
                name: {
                  $in: roles
                }
              });

            case 13:
              foundRoles = _context.sent;
              newUser.roles = foundRoles.map(function (role) {
                return role._id;
              });
              _context.next = 21;
              break;

            case 17:
              _context.next = 19;
              return _Role["default"].findOne({
                name: "user"
              });

            case 19:
              role = _context.sent;
              newUser.roles = [role._id];

            case 21:
              _context.next = 23;
              return newUser.save();

            case 23:
              savedUser = _context.sent;
              token = _jsonwebtoken["default"].sign({
                id: savedUser._id
              }, _config.tokenConfig.SECRET, {
                expiresIn: _config.tokenConfig.EXPIRES
              });
              res.json({
                token: token
              });
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t5 = _context["catch"](0);
              res.status(400).json({
                error: _context.t5
              });

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 28]]);
    }));

    function signup(_x, _x2) {
      return _signup.apply(this, arguments);
    }

    return signup;
  }(),
  signin: function () {
    var _signin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body2, email, password, existingUser, matchPassword, token;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
              _context2.next = 4;
              return _User["default"].findOne({
                email: email
              }).populate("roles");

            case 4:
              existingUser = _context2.sent;

              if (existingUser) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                token: null,
                error: {
                  message: "El usuario no existe"
                }
              }));

            case 7:
              _context2.next = 9;
              return _User["default"].comparePassword(password, existingUser.password);

            case 9:
              matchPassword = _context2.sent;

              if (matchPassword) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                token: null,
                error: {
                  message: "La contraseña es incorrecta"
                }
              }));

            case 12:
              token = _jsonwebtoken["default"].sign({
                id: existingUser._id
              }, _config.tokenConfig.SECRET, {
                expiresIn: _config.tokenConfig.EXPIRES
              });
              res.json({
                token: token
              });
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              res.status(400).json({
                error: _context2.t0
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    function signin(_x3, _x4) {
      return _signin.apply(this, arguments);
    }

    return signin;
  }()
};
var _default = authController;
exports["default"] = _default;