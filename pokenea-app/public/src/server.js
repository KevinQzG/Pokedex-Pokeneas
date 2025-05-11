require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/', indexRoutes);

const PORT = process.env.PORT || 5005;
const OWNER = process.env.OWNER || 'unknown';

app.listen(PORT, () => {
  console.log(`Servidor de ${OWNER} corriendo en http://localhost:${PORT}`);
});
