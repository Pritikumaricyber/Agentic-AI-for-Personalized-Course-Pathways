
// backend/app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const recommendCourses = require('./recommender');
const generateExplanation = require('../ibm/simulated_granite');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint
app.post('/api/recommend', (req, res) => {
  const { interest, level } = req.body;

  // Validate input
  if (!interest || !level) {
    return res.status(400).json({ error: "Missing interest or level" });
  }

  // Get recommended courses and explanation
  const courses = recommendCourses(interest, level);
  const explanation = generateExplanation(interest, level);

  // Send response
  res.json({ courses, explanation });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
