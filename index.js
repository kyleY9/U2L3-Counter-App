// Brooklyn Tech Counter App

let count = 0;
let display = document.getElementById("count-el");
 function increment() {
    count++;
    display.innerHTML = count;
 }

function save() {
  let myParagraph = document.getElementById("previous-entries");
  let entry = document.getElementById("count-el").innerHTML;
  myParagraph.innerHTML += " " + entry + " - ";
}

function reset() {
  count = 0;
  display.innerHTML = count;
}