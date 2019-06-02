const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000; //hiroku will provide port via process.env.PORT, dev env will default to 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
