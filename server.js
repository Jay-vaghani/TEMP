const dotenv = require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    massage: "server is working fine",
  });
});

app.get("/cookie", (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      massage: "cookie has been send",
    })
    .cookie("token", "token value", {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
