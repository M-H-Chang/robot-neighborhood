// -----Utility Logic-----
// const firstNumber = "1";
// const secondNumber = "2";
// const thirdNumber = "3";

// -----Business Logic-----
function identifyOne(number) {
  const numArray = number.split("");
  // for (let i = 0; i < numArray.length; i++) {
  //   if (numArray[i] === firstNumber) {
  //     numArray[i].replace(firstNumber, "Beep!");
  //   } console.log(numArray);
  // }
  if (numArray[0] === "1") {
    numArray.splice(0, 1, "Beep!")
  } console.log(numArray)

  // numArray.forEach(function (elements) {
  //   if (elements === "1") {
  //     numArray.replace("1", "Beep!");
  //   } console.log(numArray)
  // });
}
// -----User Interface Logic-----
$("document").ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const num = parseInt($("#input").val());
  })
})