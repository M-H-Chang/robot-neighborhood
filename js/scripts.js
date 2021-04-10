// -----Utility Logic-----
const logicNumbers = ["1", "2", "3"]
const num1Logic = "Beep!";
const num2Logic = "Boop!";
const num3Logic = "Won't you be my neighbor?"

function notNumber(number) {
  if (isNaN(number)) {
    return alert("Please enter a number!");
  }
}

// -----Business Logic-----
function identify(number) {
  if (notNumber(number)) {
    return 0;
  }
  const newArray = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      newArray.push("won't you be by neighbor")
    } else if (i.toString().includes("2")) {
      newArray.push("beep!")
    } else if (i.toString().includes("1")) {
      newArray.push("boop")
    } else {
      newArray.push(i)
    }
  }


  // if (numArray[i] === logicNumbers[0]) {
  //   newArray.push(num1Logic + ", ")
  // } else if (numArray[i] === logicNumbers[1]) {
  //   newArray.push(num2Logic + ", ");
  // } else if (numArray[i] === logicNumbers[2]) {
  //   newArray.push(num3Logic + ", ");
  // } else {
  //   newArray.push(numArray[i] + ", ");
  // } return newArray;
}

// -----User Interface Logic-----
$("document").ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const num = parseInt($("#input").val());
    const userInput = identify(num)
    $("#results").html(userInput);
  })
})