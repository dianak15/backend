
const transcriptsRoutes = require('./routes/transcripts');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/transcripts', transcriptsRoutes);

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
