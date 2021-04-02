// -----Utility Logic-----
const firstNumber = [1]
const secondNumber = [2]
const thirdNumber = [3]

// -----Business Logic-----
function identifyOne(number) {
  const numArray = [];
  const oneArray = [];
  numArray.forEach(function (element) {
    if (numArray === firstNumber) {
      oneArray.push();
      console.log(oneArray);
    }
  });
}
// -----User Interface Logic-----
$("document").ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const num = $("#num").val().numArray.push();
  })
})