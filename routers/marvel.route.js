const express = require("express");
const router = express.Router();
const marvel_controller = require("../controllers/marvel.controller");

module.exports = function () {
  router.get("/getAll", (req, res) => {
    marvel_controller.getCharacters(res, req);
  });

  return router;
};
