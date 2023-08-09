const horizontalEl = document.getElementById("horizontal");
const verticalEl = document.getElementById("vertical");
const typeEl = document.getElementById("type");
const messageEl = document.querySelector(".message");
const durationEl = document.getElementById("duration");
const toastBtn = document.querySelector(".btn");
const outputEl = document.querySelector(".output");
const outputText = document.querySelector(".outputPara");
const closeEl = document.querySelector(".close");

toastBtn.addEventListener("click", function () {
  showToast();
  setTimeout(function () {
    outputEl.style.display = "none";
  }, durationEl.value * 1000);
});
function showToast() {
  const horizontalPoint = horizontalEl.value;
  const verticalPoint = verticalEl.value;
  const messageType = typeEl.value;
  outputEl.style.top = "initial";
  outputEl.style.left = "initial";
  outputEl.style.right = "initial";
  outputEl.style.bottom = "initial";

  outputEl.style.display = "initial";
  if (horizontalPoint === "left") {
    outputEl.style.left = "10px";
  }
  if (horizontalPoint === "right") {
    outputEl.style.right = "10px";
  }
  if (verticalPoint === "top") {
    outputEl.style.top = "10px";
  }
  if (verticalPoint === "bottom") {
    outputEl.style.bottom = "10px";
  }
  if (messageType === "success") {
    outputEl.style.backgroundColor = "green";
  } else if (messageType === "error") {
    outputEl.style.backgroundColor = "red";
  } else if (messageType === "warn") {
    console.log("hi, I am working");
    outputEl.style.backgroundColor = "orange";
  } else if (messageType === "info") {
    outputEl.style.backgroundColor = "white";
  }
  outputText.textContent = messageEl.value;
}
closeEl.addEventListener("click", function () {
  outputEl.style.display = "none";
});
