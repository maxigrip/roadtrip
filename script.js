function submitAnswer() {
    var userInput = document.getElementById("userInput").value;
    alert("You entered: " + userInput);
  }
function checkAnswer() {
  var userInput = document.getElementById("userInput").value;
  if (userInput === "Göteborg") {
    window.location.href = "correct.html";
  } else {
    window.location.href = "incorrect.html";
  }
}
