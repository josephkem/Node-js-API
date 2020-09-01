const express = require("express");
const router = express.Router();

router.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

router.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

router.put("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

router.delete("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});
