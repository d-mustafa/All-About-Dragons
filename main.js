// JAVASCRIPT EVENT LISTENERS
// var heading = document.getElementById("test");
// console.log(heading);

// var listItem = document.getElementById("list2");
// console.log(listItem);

function greet() {
  let name = prompt("Enter your name");
  alert(`Nice to meet you, ${name}`);
}

// greet();
// greet();
// greet();

document.getElementById("btn1").addEventListener("click", greet);

// Ex. innerHTML

// event listener
document.getElementById("btn2").addEventListener("click", changeToDragon);

// event function
function changeToDragon() {
  document.getElementById("test").innerHTML = "All About Dragons";
  document.getElementById("intro-p").innerHTML =
    "Dragons would make the best pets. Let me tell you why...";

  // Change list item 1 to say "Smaug"
  document.getElementById("list1").innerHTML = "Smaug";
}

// Ex. Changing CSS from JS
// event listener
document.getElementById("btn3").addEventListener("click", changeStyle);

// event function
function changeStyle() {
  document.getElementById("list").style.fontFamily = "Papyrus";
  document.getElementById("the-body").style.backgroundColor = "lightgreen";
}

// button 4 random number
// event listener
document.getElementById("btn4").addEventListener("click", randomNumber);

// event function
function randomNumber() {
  alert(Math.floor(Math.random() * 100));
}

// button 5 famous dragon
// event listener
document.getElementById("btn5").addEventListener("click", famousDragon);

// event function
function famousDragon() {
  document.getElementById("list1").innerHTML = "Smaug";
  document.getElementById("list2").innerHTML = "Toothless";
  document.getElementById("list3").innerHTML = "Charizard";
  document.getElementById("list4").innerHTML = "Shenron";
}

// button 6 change page
// event listener
document.getElementById("btn6").addEventListener("click", changeEverything);

// event function
function changeEverything() {
  document.getElementById("the-body").style.color = "#32612D";
  document.getElementById("the-body").style.border = "2px solid green";
}
