const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000

app.use(bodyParser.json())

// Endpoint pro přihlášení
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Zde by měla proběhnout autentizace (například ověření v databázi)
  if (username === 'demo' && password === 'password') {
    res.json({ username: 'demo', token: 'your_token' })
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})