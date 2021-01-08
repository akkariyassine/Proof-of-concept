const api = require("marvel-api");
const marvel = api.createClient({
  publicKey: "2688f5e178b1c2781faa3c31bc1fbed9",
  privateKey: "59298ac0c1fbdb9f31847e189611b6325b3db5d4",
});

var localCache = [];
exports.getCharacters = (res, req) => {
  localCache.map((result) => {
    if (result.page == req.params.nbr) {
      res.status(200).json(result.data);
      return 0;
    }
  });
  marvel.characters
    .findAll(req.params.nbr, req.params.index)
    .then((results) => {
      localCache.push({ page: req.params.nbr, data: results });
      res.status(200).json(results);
    })
    .fail(console.error)
    .done();
};
