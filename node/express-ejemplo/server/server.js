import express from "express";
const app = express();
const port = 3000;
import routes from "../routes/routes";
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");

app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routes(app);
console.log(process.env.DB_USER);
app.get("*", (req, res) =>
  res.status(400).send({
    message: "No se encuentra el recurso"
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
