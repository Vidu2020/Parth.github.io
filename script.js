document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // Typing Animation
  // ===============================
  const typingEl = document.getElementById("typing");
  const text = "Senior Data Scientist | AI Engineer";
  let i = 0;

  function typing() {
    if (!typingEl) return;
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  typing();

  // ===============================
  // Chart.js Visualization
  // ===============================
  const ctxChart = document.getElementById("chart");

  if (ctxChart && typeof Chart !== "undefined") {
    new Chart(ctxChart, {
      type: "bar",
      data: {
        labels: ["ML", "DL", "NLP", "Data Eng"],
        datasets: [{
          label: "Skill Strength",
          data: [90, 85, 80, 75],
          backgroundColor: [
            "rgba(63, 191, 189, 0.85)",
            "rgba(94, 114, 228, 0.85)",
            "rgba(0, 200, 150, 0.85)",
            "rgba(255, 159, 64, 0.85)"
          ],
          borderColor: [
            "#3fbfbd",
            "#5e72e4",
            "#00c896",
            "#ff9f40"
          ],
          borderWidth: 1,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: {
              color: "#d1d5db"
            },
            grid: {
              color: "rgba(255,255,255,0.08)"
            }
          },
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              color: "#d1d5db",
              stepSize: 20
            },
            grid: {
              color: "rgba(255,255,255,0.08)"
            }
          }
        }
      }
    });
  }

  // ===============================
  // Theme Toggle
  // ===============================
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      toggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });
  }
});

// ===============================
// Project Filter
// ===============================
function filterProjects(category) {
  const cards = document.querySelectorAll(".projects .card");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
