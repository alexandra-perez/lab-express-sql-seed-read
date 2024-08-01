const checkName = (req, res, next) => {
  if (req.body.name) {
    return next();
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
};

const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    return next();
  } else {
    res.status(400).json({ error: 'Artist is required' });
  }
};

const checkIsFavorite  = (req, res, next) => {
    if (typeof req.body.is_favorite === 'boolean') {
        return next();
    } else {
        res.status(400).json({ error: 'Is_favorite must be true or false' });
    }
}

module.exports = { checkName, checkArtist, checkIsFavorite };
