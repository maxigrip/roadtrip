function checkAnswer() {
  var userInput = document.getElementById("userInput").value;

  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else if (userInput === "incorrect1") {
    window.location.href = "incorrect1.html";
  } else if (userInput === "incorrect2") {
    window.location.href = "incorrect2.html";
  } else if (userInput === "incorrect3") {
    window.location.href = "incorrect3.html";
  }
}
