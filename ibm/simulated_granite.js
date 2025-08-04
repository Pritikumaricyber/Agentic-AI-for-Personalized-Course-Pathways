// ibm/simulated_granite.js

function generateExplanation(interest, level) {
  const messages = {
    "Frontend Development": {
      Beginner: "These courses introduce core web technologies like HTML, CSS, and JavaScript — ideal for someone just starting with frontend design.",
      Intermediate: "These frontend courses focus on building dynamic interfaces using libraries like React — perfect for leveling up your skills.",
      Advanced: "These advanced courses explore architecture patterns, state management, and performance optimization in modern frontend development."
    },
    Cybersecurity: {
      Beginner: "These beginner-friendly courses explain basic cybersecurity concepts, common threats, and how to stay secure online.",
      Intermediate: "At the intermediate level, you'll dive into encryption, network security, and tools like firewalls and VPNs.",
      Advanced: "These advanced courses cover ethical hacking, penetration testing, and real-world cyber defense strategies."
    },
    "UI/UX Design": {
      Beginner: "These UI/UX courses help you understand user-centered design, usability, and the basics of wireframing and prototyping.",
      Intermediate: "You’ll learn how to use tools like Figma and apply design systems to build interactive user experiences.",
      Advanced: "These courses focus on UX research, case studies, and advanced prototyping for complex user flows."
    }
  };

  if (messages[interest] && messages[interest][level]) {
    return messages[interest][level];
  }

  return "These courses were selected based on your preferences to help you progress in your chosen field.";
}

module.exports = generateExplanation;
