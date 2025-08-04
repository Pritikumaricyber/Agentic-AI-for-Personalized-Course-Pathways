// backend/recommender.js

const courseData = require('../data/courses.json');  // Load the course data

function recommendCourses(interest, level) {
  if (
    courseData.hasOwnProperty(interest) &&
    courseData[interest].hasOwnProperty(level)
  ) {
    return courseData[interest][level];
  } else {
    return [
      {
        title: "No matching courses found.",
        platform: "N/A",
        duration: "—"
      }
    ];
  }
}

module.exports = recommendCourses;
