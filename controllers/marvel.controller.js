const publicKey = "2688f5e178b1c2781faa3c31bc1fbed9";
const privateKey = "59298ac0c1fbdb9f31847e189611b6325b3db5d4";
const axios = require("axios");

var CryptoJS = require("crypto-js");

var localCache = [];
exports.getCharacters = (res, req) => {
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

  var url =
    "http://gateway.marvel.com/v1/public/characters?ts=" +
    ts +
    "&apikey=" +
    publicKey +
    "&hash=" +
    hash;
  console.log(url);
  localCache.map((result) => {
    if (result.page == req.params.nbr) {
      res.status(200).json(result.data);
      return 0;
    }
  });

  return axios
    .get(url)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      return res.json(err);
    });
};
