const tests = [
  { exam: "SSC", subject: "Maths", questions: 30, duration: "25 min" },
  { exam: "SSC", subject: "Reasoning", questions: 25, duration: "20 min" },
  { exam: "Railway", subject: "English", questions: 30, duration: "20 min" },
  { exam: "Railway", subject: "Science", questions: 25, duration: "20 min" },
  { exam: "Bank", subject: "Reasoning", questions: 35, duration: "25 min" },
  { exam: "Bank", subject: "English", questions: 30, duration: "20 min" },
  { exam: "MP Police", subject: "GK/GS", questions: 40, duration: "30 min" },
  { exam: "MPESB", subject: "Science", questions: 30, duration: "25 min" },
  { exam: "MPESB", subject: "Maths", questions: 30, duration: "25 min" }
];

const testList = document.getElementById("testList");
const filterExam = document.getElementById("filterExam");
const registerBtn = document.getElementById("registerBtn");
const registerMsg = document.getElementById("registerMsg");

function renderTests(selectedExam) {
  const filtered =
    selectedExam === "all"
      ? tests
      : tests.filter((test) => test.exam === selectedExam);

  testList.innerHTML = filtered
    .map(
      (test) => `
      <article class="test-card">
        <h3>${test.subject} Test</h3>
        <p class="meta">Exam: ${test.exam}</p>
        <p class="meta">Questions: ${test.questions}</p>
        <p class="meta">Duration: ${test.duration}</p>
      </article>
    `
    )
    .join("");
}

filterExam.addEventListener("change", (event) => {
  renderTests(event.target.value);
});

registerBtn.addEventListener("click", () => {
  registerMsg.textContent =
    "Registration successful! Saturday full-length test invite aapke dashboard par aa jayega.";
  registerMsg.classList.remove("hidden");
});

renderTests("all");
