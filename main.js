const RGB = document.querySelector(".RGB");
const R_log = document.getElementById("R-value");
const G_log = document.getElementById("G-value");
const B_log = document.getElementById("B-value");
const Hex = document.querySelector("#Hex");

RGB.addEventListener("input", updateValue);

function updateValue(e) {
  e.target.parentElement.children[2].innerText = e.target.value;
  Hex.innerText = `#${rgbToHex(R_log.innerText)}${rgbToHex(
    G_log.innerText
  )}${rgbToHex(B_log.innerText)}`;
  document.body.style.backgroundColor = `${Hex.innerText}`;
}

//轉換16進位與補位
function rgbToHex(color) {
  return Number(color).toString(16).padStart(2, "0");
}
