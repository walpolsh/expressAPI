import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT;
import models from "./models";
import routes from "./routes";

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});
app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.get("/", (req, res) => {
  cd;
  return res.send("Hey welcome");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
