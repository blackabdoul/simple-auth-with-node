//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const opw = "ILoveProgramming";
var pw;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  pw = req.body["password"];
  if (opw !== pw) {
    res.sendFile(__dirname + "/public/index.html");
  } else {
    res.sendFile(__dirname + "/public/secret.html");
  }
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
