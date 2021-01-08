const dotenv = require("dotenv");
dotenv.config();
const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;
const axios = require("axios");
var CryptoJS = require("crypto-js");
var localCache = [];
exports.getCharacters = (res, req) => {
  console.log(process.env);
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

  var url =
    "http://gateway.marvel.com/v1/public/characters?ts=" +
    ts +
    "&apikey=" +
    publicKey +
    "&hash=" +
    hash +
    "&limit=" +
    req.query.nbr +
    "&offset=" +
    req.query.page;

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
