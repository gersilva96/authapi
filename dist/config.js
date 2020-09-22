"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenConfig = exports.initialConfig = void 0;

var initialConfig = function initialConfig() {
  process.env.PORT = process.env.PORT || 3000;
  process.env.NODE_ENV = process.env.NODE_ENV || "dev";
  var urlDB;
  process.env.NODE_ENV === "dev" ? urlDB = "mongodb://localhost/authapi" : urlDB = process.env.URIDB;
  process.env.URLDB = urlDB;
};

exports.initialConfig = initialConfig;
var tokenConfig = {
  SECRET: process.env.SECRET_KEY | "clavesecretadelproyecto",
  EXPIRES: 86400
};
exports.tokenConfig = tokenConfig;