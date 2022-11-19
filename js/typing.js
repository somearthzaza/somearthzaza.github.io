function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text = ["FS", "FAKSUX", "FAK", "SUX"];
let letter = "";
let index = 0;
let count = 0;
let currentText = "";
let checktext = "";
(async function type() {
  if (currentText === letter) {
    console.log("sleep");
    await sleep(2000);
  }
  if (count === text.length) {
    count = 0;
  }
  checktext = text[count];
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typeing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 300);
})();
