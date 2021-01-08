const express = require("express");
const router = express.Router();
const marvel_controller = require("../controllers/marvel.controller");

module.exports = function () {
  router.get("/getAll", (req, res) => {
    console.log("here");
    marvel_controller.getCharacters(res, req);
  });

  return router;
};
