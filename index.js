const app = require("express")();
const server = require("http").Server(app);
const cors = require("cors");
const compression = require("compression");
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const marvelRoute = require("./routers/marvel.route")();

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use("/marvel", marvelRoute);
app.use(express.static(__dirname + "/marvel-client/public")); //__dir and not _dir

server.listen(port, () => {
  console.log("server start at port ", port);
});
