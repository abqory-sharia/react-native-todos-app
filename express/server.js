const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./src/config/database");

const routes = require("./src/routes");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

sequelize
  .sync()
  // .sync({ force: true })
  .then((data) => {
    console.info(data);
    app.listen(PORT, () => {
      console.info(`This Apps was running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.info(err);
  });
