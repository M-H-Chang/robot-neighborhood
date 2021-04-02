// -----Utility Logic-----
// const firstNumber = "1";
// const secondNumber = "2";
// const thirdNumber = "3";

// -----Business Logic-----
function identifyOne(number) {
  const numArray = number.split("");



  numArray.forEach(function (element) {
    if (element === "1") {

      console.log("beep")
    }
  });
}
// -----User Interface Logic-----
$("document").ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const num = parseInt($("#input").val());
  })
})