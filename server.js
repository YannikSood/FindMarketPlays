const express = require("express"),
  app = express(),
  cors = require("cors");

app.use(cors());
app.listen(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});
