const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Este es el sitio web 2\n');
});

app.listen(PORT, () => {
  console.log(`Servidor web2 escuchando en el puerto ${PORT}`);
});
