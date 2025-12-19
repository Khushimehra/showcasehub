const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const existing = await Subscriber.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    const subscriber = new Subscriber(req.body);
    await subscriber.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
