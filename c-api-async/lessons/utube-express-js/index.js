const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

//call "next" last to move to middleware fn in the stack
const logger = (req, res, next) => {
  console.log(`Requested: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}

//init middleware
app.use(logger);

// gets all members
app.get('/api/members',(req, res) => res.json(members))

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));