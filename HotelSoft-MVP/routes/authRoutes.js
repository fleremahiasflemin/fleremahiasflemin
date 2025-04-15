
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) return res.json({ msg: 'Login correcto', user: { email } });
  res.status(400).json({ error: 'Faltan datos' });
});

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (email && password) return res.json({ msg: 'Registro correcto', user: { email } });
  res.status(400).json({ error: 'Faltan datos' });
});

module.exports = router;
