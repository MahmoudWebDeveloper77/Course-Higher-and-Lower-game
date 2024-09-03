let attempts = 0;
let score = 0;

function guess(userGuess) {
  attempts++;
  function sfx(isCorrect) {
    let audio = isCorrect
      ? document.getElementById("correct")
      : document.getElementById("wrong");
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
  document.getElementById("attempts").innerHTML = attempts;

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const correctAnswer = randomNumber % 2 == 0 ? "even" : "odd";

  if (correctAnswer == userGuess) {
    document.getElementById("display").innerHTML = "Correct! The Random Number Is " + randomNumber;
    // Adding Score
    score++;
    document.getElementById("score").innerHTML = score;
    //Playing the sfx
    sfx(true);
  } else {
    document.getElementById("display").innerHTML =
      "Wrong! The Random Number Is " + randomNumber;
    //Playing the sfx
    sfx(false);
  }
}
