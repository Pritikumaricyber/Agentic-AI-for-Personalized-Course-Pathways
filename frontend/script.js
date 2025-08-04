document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  const form = document.getElementById("learningForm");
  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log("Form submitted");

    const interest = document.getElementById("interest").value;
    const level = document.getElementById("level").value;

    console.log("Interest:", interest);
    console.log("Level:", level);

    try {
      const response = await fetch("http://localhost:5000/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interest, level })
      });

      const data = await response.json();
      const resultDiv = document.getElementById("result");
      //resultDiv.innerHTML = "<h2>Recommended Courses:</h2>";
      resultDiv.innerHTML = `
        <h2><center><u>Recommended Courses</u></center></h2>
        <p style="font-style: italic; margin-bottom: 15px;">${data.explanation}</p>
      `;

      data.courses.forEach(course => {
        resultDiv.innerHTML += `
          <div class="course-card">
            <h3>${course.title}</h3>
            <p><strong>Platform:</strong> ${course.platform}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
          </div>
        `;
      });
    } catch (err) {
      console.error("Fetch error:", err);
    }
  });
});
