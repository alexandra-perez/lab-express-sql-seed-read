const express = require('express');
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  addSong,
  deleteSong,
  updateSong,
} = require('../queries/song');
const {
  checkName,
  checkArtist,
  checkIsFavorite,
} = require('../validations/checkSongs');

router.get('/', async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    res.status(200).json(allSongs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const song = await getSongById(id);
    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch song' });
  }
});

router.post('/', checkName, checkArtist, checkIsFavorite, async (req, res) => {
  try {
    const newSong = await addSong(req.body);
    res.status(401).json(newSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create song' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await deleteSong(id);
    if (!deletedSong) {
      return res.status(400).json({ error: 'No song found' });
    }
    res.json('Song deleted');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete song' });
  }
});

router.put(
  '/:id',
  checkName,
  checkArtist,
  checkIsFavorite,
  async (req, res) => {
    const { id } = req.params;
    try {
      const updatedSong = await updateSong(id, req.body);
      if (!updatedSong) {
        return res.status(404).json({ error: 'No song found' });
      }
      res.status(200).json(updatedSong);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update song' });
    }
  }
);

module.exports = router;
