app.get('/api/message', (req, res) => {
  res.json({ msg: "Hello from backend!" });
});

const express = require('express');
const router = express.Router();
const { trackPhone } = require('../controllers/logic');

router.post('/track', trackPhone);


module.exports = router;
