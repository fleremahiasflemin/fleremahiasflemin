
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hotelsoft', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB HotelSoft'))
  .catch(err => console.error('Error de conexión', err));

app.use('/api/auth', authRoutes);

app.listen(4000, () => console.log('API HotelSoft corriendo en puerto 4000'));
