// backend/app.js
const generateExplanation = require('../ibm/simulated_granite');


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const recommendCourses = require('./recommender');

const extractIntent = require('../ibm/watson_nlu');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

/*app.post('/api/recommend', (req, res) => {
  const { interest, level } = req.body;
  const courses = recommendCourses(interest, level);
 // res.json({ courses });
  const explanation = generateExplanation(interest, level);
res.json({ courses, explanation });
}*/
app.post('/api/recommend', (req, res) => {
  const { interest, level, userText } = req.body;

  let resolvedInterest = interest;

  // If userText is provided, extract intent
  if (userText && !interest) {
    const extracted = extractIntent(userText);
    resolvedInterest = extracted.length > 0 ? extracted[0] : null;
  }

  if (!resolvedInterest || !level) {
    return res.status(400).json({ error: "Missing interest or level" });
  }

  const courses = recommendCourses(resolvedInterest, level);
  const explanation = generateExplanation(resolvedInterest, level);

  res.json({ courses, explanation, resolvedInterest });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
