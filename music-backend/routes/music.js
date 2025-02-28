const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

// Get music entries
router.get('/', async (req, res) => {
  try {
    const { type, mood, season } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (mood) filter.mood = mood;
    if (season) filter.ragaSeason = season;
    
    const music = await Music.find(filter);
    res.json(music);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add listen counter
router.post('/:id/listen', async (req, res) => {
  try {
    const music = await Music.findByIdAndUpdate(
      req.params.id,
      { $inc: { listenCount: 1 } },
      { new: true }
    );
    res.json(music);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;