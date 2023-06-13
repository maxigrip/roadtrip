function checkAnswer() {
  var userInput = document.getElementById("userInput").value;
  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    window.location.href = "8 poäng.html";
  }
}
