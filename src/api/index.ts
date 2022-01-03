import express, { json } from "express";
import { apiConstants } from "./constants";
import { router } from "./routes";

const app = express();

app.use(json());

app.use(router);

app.listen(apiConstants.port, () => {
  console.log("Express app is running");
});
