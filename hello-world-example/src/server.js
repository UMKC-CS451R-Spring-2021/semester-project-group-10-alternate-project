const express = require('express');
const cors = require('cors;');
const app = express();

app.use(cors());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to capstone's server application." });
});

// app.use('login', (req, res) => {
//     res.send({
//         token: 'test123'
//     });
// });

app.listen(8080, () => console.log('API is running on http://localhost:8080'));