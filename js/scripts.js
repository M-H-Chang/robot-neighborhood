// -----Utility Logic-----
const logicNumbers = ["1", "2", "3"]
const num1Logic = "Beep!";
// const firstNumber = "1";
// const secondNumber = "2";
// const thirdNumber = "3";

// -----Business Logic-----
function identifyOne(number) {
  const numArray = number.split("");
  const newArray = [];
  for (let i = 0; i < numArray.length; i++)
    if (numArray[i] === logicNumbers[0]) {
      newArray.push(num1Logic)

    } else {
      newArray.push(numArray[i]);
    } console.log(newArray)

}

// numArray.forEach(function (element) {
//   if (element === "1") {

//     console.log("beep")
//   } else if (element === "2") {

//   } else if (element === "3") {

//   } else {
//     element === element
//   }
// });

// -----User Interface Logic-----
$("document").ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const num = parseInt($("#input").val());
  })
})