// Selected color by user
let selectedColor = null;

// User balance
let balance = 1000;

// Timer
let timeLeft = 30;
let timer; // Timer ka handle

// Start the timer
timer = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
  } else {
    // Timer khatam → result
    if (selectedColor === null) {
      document.getElementById("result").innerText = "⏱ Time up! No color selected.";
    } else {
      autoPredict();
    }
    timeLeft = 30; // Reset next round
    selectedColor = null; // Reset selection
  }
}, 1000);

// Function when user selects a color
function selectColor(color) {
  selectedColor = color;
  document.getElementById("result").innerText = `You selected ${color.toUpperCase()}`;
}

// Predict button function
function predict() {
  if (!selectedColor) {
    alert("Select a color first!");
    return;
  }
  autoPredict();
}

// Auto predict function (called by timer or predict button)
function autoPredict() {
  let resultColor = generateResult();

  if (resultColor === selectedColor) {
    balance += 100;
    document.getElementById("result").innerText =
      `🎉 WIN! Result: ${resultColor.toUpperCase()}`;
  } else {
    balance -= 100;
    document.getElementById("result").innerText =
      `❌ LOSE! Result: ${resultColor.toUpperCase()}`;
  }

  document.getElementById("balance").innerText = balance;
  selectedColor = null; // Reset selection for next round
}

// Random color generator
function generateResult() {
  let rand = Math.random() * 100;

  if (rand < 49) return "red";
  if (rand < 98) return "green";
  return "violet"; // Jackpot
}
