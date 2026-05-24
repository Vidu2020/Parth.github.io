// ===============================
// Typing Animation
// ===============================
const text = "Senior Data Scientist | AI Engineer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();
// ===============================
// Chart.js Visualization
// ===============================
const ctxChart = document.getElementById('chart');

if (ctxChart) {
  new Chart(ctxChart, {
    type: 'bar',
    data: {
      labels: ["ML", "DL", "NLP", "Data Eng"],
      datasets: [{
        label: "Skill Strength",
        data: [90, 85, 80, 75],
        backgroundColor: "#3fbfbd"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// ===============================
// Theme Toggle
// ===============================
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
