const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// micro blog posts API
app.use("/api/micro_blogs", require("./api/micro_blogs"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/client", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "client.js"));
});

app.listen(8080);
