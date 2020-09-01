const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

router.post("/", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ succes: true, msg: "Show all bootcamps" });
});

module.exports = router;
