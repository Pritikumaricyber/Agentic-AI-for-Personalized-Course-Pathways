// ibm/watson_nlu.js

function extractIntentFromText(userInput) {
  const keywords = {
    "frontend": "Frontend Development",
    "html": "Frontend Development",
    "css": "Frontend Development",
    "javascript": "Frontend Development",
    "ui": "UI/UX Design",
    "ux": "UI/UX Design",
    "design": "UI/UX Design",
    "figma": "UI/UX Design",
    "cyber": "Cybersecurity",
    "security": "Cybersecurity",
    "hacking": "Cybersecurity",
    "network": "Cybersecurity"
  };

  const input = userInput.toLowerCase();
  const detected = new Set();

  for (const word in keywords) {
    if (input.includes(word)) {
      detected.add(keywords[word]);
    }
  }

  return Array.from(detected);
}

module.exports = extractIntentFromText;
