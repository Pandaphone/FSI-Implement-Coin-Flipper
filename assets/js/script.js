// keep track of result from the random function

// the # of times heads is flipped
let heads = 0;
//the # of times tails is flipped
let tails = 0;
//total # of flips
//  const total = 0;

const headsCol = document.getElementById("heads");
const tailsCol = document.getElementById("tails");
const headsPercentageCol = document.getElementById("heads-percent");
const tailsPercentageCol = document.getElementById("tails-percent");
let pennyImage = document.querySelector("img");
let statusMessage = document.querySelector(".message-container");

document.addEventListener("DOMContentLoaded", function () {
  // This is just a sanity check to make sure your JavaScript script is getting loaded
  // You can remove it once you see it in your browser console in the developer tools
  console.log("Hi");

  let flipButton = document.getElementById("flip");
  let clearButton = document.getElementById("clear");
  let total = 0;

  flipButton.addEventListener("click", function () {
    // Flip Button Click Handler
    // will return either 1 or 0, 1 === heads and 0 === tails
    const randomResult = Math.round(Math.random());

    // aka tails
    if (randomResult === 0) {
      pennyImage.src = "./assets/images/penny-tails.jpg";
      pennyImage.alt = "A picture of tails on a penny";
      pennyImage.setAttribute("src", "./assets/images/penny-tails.jpg");
      //update status message in dom
      statusMessage.textContent = "You Flipped Tails!";
      tails++;
      tailsCol.textContent = tails;
    }
    // aka heads
    else {
      pennyImage.src = "./assets/images/penny-heads.jpg";
      pennyImage.alt = "A picture of heads on a penny";
      statusMessage.textContent = "You Flipped Heads!";
      heads++;
      headsCol.textContent = heads;
    }
    tailsPercentageCol.textContent =
      Math.round((tails / (heads + tails)) * 100) + "%";
    headsPercentageCol.textContent =
      Math.round((heads / (heads + tails)) * 100) + "%";
  });

  clearButton.addEventListener("click", function () {
    // Clear Button Click Handler
    heads = 0;
    tails = 0;
    headsCol.textContent = heads;
    tailsCol.textContent = tails;
    tailsPercentageCol.textContent = 0 + "%";
    headsPercentageCol.textContent = 0 + "%";

    statusMessage.textContent = "Let's get Rolling!";
    pennyImage.setAttribute("src", "./assets/images/penny-heads.jpg");
    pennyImage.setAttribute("alt", "A picture of heads on a penny");
  });
});
