function checkAnswer() {
  var userInput = document.getElementById("userInput").value;

  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else (userInput === "incorrect1") {
    window.location.href = "incorrect1.html";
  } else (userInput === "incorrect2") {
    window.location.href = "incorrect2.html";
  } else (userInput === "incorrect3") {
    window.location.href = "incorrect3.html";
  }
}
