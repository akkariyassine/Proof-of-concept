const api = require("marvel-api");
const marvel = api.createClient({
  publicKey: "2688f5e178b1c2781faa3c31bc1fbed9",
  privateKey: "59298ac0c1fbdb9f31847e189611b6325b3db5d4",
});

var localCache = new Array();
exports.getCharacters = (res, req) => {
  marvel.characters.findAll(function (err, results) {
    if (err) {
      res.status(err.status).json(err);
    }
    res.status(200).json(results);
  });
};
