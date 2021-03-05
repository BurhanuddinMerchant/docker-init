const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send({ message: "Docker is easy as hell" });
});
app.listen(port, () => {
  console.log("Server up on port : ", port);
  console.log("Link : http://localhost:" + port);
});
