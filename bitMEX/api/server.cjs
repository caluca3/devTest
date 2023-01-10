const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect(`mongodb+srv://carlos22:24354830@cluster0.tfl1o9y.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
