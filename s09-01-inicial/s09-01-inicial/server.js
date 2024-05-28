const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');


// Registrar las apis
const peli = require('./api/peliculas/pelicula.js')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

// Mapear la api con la URL de invocacion
app.use('/api/peliculas', peli)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

