const express = require("express");
const router = express.Router();
const Enquiry = require("../modal/BookingEnquiry");

/* CREATE ENQUIRY */
router.post("/", async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json({ success: true, enquiry });
  } catch (err) {
    res.status(500).json({ message: "Error creating enquiry" });
  }
});

/* GET ALL ENQUIRIES (Admin) */
router.get("/", async (req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });
  res.json({ enquiries });
});

module.exports = router;