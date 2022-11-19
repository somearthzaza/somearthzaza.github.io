// const dropdown = document.querySelector(".dropdown");
// const dropdownData = document.querySelector(".dropdown-data");
// dropdown.addEventListener("click", function () {
//   if (dropdownData.style.display === "none") {
//     dropdownData.style.display = "block";
//   } else {
//     dropdownData.style.display = "none";
//   }
// });
// console.log(dropdownData);
// window.onclick = function (event) {};

const line = document.querySelector(".vertical-line");
const txHeight = 200;
const tx = document.getElementsByTagName("textarea");
const tester = document.querySelector(".select-grid-main");
const widthtest = window.innerWidth;
for (let i = 0; i < tx.length; i++) {
  if (tx[i].value == "") {
    tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
  } else {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
    );
  }
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput(e) {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}

// window.addEventListener("resize", (event) => {
//   const widthtest = window.innerWidth;
//   console.log(widthtest);
//   if (widthtest <= 1024) {
//     tester.classList.add("testfuc");
//   } else if (widthtest >= 1025) {
//     tester.classList.remove("testfuc");
//   }
// });
