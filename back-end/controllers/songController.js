const express = require('express');
const router = express.Router();
const { getAllSongs } = require('../queries/song');

router.get('/', async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    res.status(200).json(allSongs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

module.exports = router;
