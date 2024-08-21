"use strict";
//BASICS
//console.log(document.querySelector(".message").textContent);
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number🎉";
document.querySelector(".guess").value = 10;
*/

// document.querySelector(".check").addEventListener("click", function () {
//   const x = Number(document.querySelector(".guess").value);
//   console.log(x, typeof x);
//   if (!x) {
////   }
// });
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔No Number");

    //document.querySelector(".messege").textContent = "⛔No Number";
  } else if (secretNumber === guess) {
    //document.querySelector(".message").textContent = "🎉Correct Number";
    displayMessage("🎉Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //  guess > secretNumber ? "📈Number is too High" : "📉Number is too low";
      displayMessage(
        guess > secretNumber ? "📈Number is too High" : "📉Number is too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "you lost the game";
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//ALTERNATIVE

//   else if (secretNumber > guess) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉Number is too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost the game";
//       document.querySelector(".score").textContent = score;
//     }
//   } else if (secretNumber < guess) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈Number is too High";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost the game";
//       document.querySelector(".score").textContent = score;
//     }
//   }
// });

document.querySelector(".again").addEventListener("click", function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
