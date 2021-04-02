// -----Utility Logic-----
const logicNumbers = ["1", "2", "3"]
const num1Logic = "Beep!";
const num2Logic = "Boop!";
const num3Logic = "Won't you be my neighbor?"


// -----Business Logic-----
function identifyOne(number) {
  const numArray = number.split("");
  const newArray = [];
  for (let i = 0; i < numArray.length; i++)
    if (numArray[i] === logicNumbers[0]) {
      newArray.push(num1Logic)
    } else if (numArray[i] === logicNumbers[1]) {
      newArray.push(num2Logic);
    } else if (numArray[i] === logicNumbers[2]) {
      newArray.push(num3Logic);
    } else {
      newArray.push(numArray[i]);
    }
}

// -----User Interface Logic-----
$("document").ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const num = parseInt($("#input").val());
    $("#results").html(identifyOne(num));
  })
})