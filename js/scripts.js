// -----Utility Logic-----
// -----Business Logic-----
function identify(number) {
  const newArray = [];
  if (isNaN(number)) {
    return alert("Please enter a number!")
  }
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      newArray.push("won't you be by neighbor?")
    } else if (i.toString().includes("2")) {
      newArray.push("beep!")
    } else if (i.toString().includes("1")) {
      newArray.push("boop!")
    } else {
      newArray.push(i)
    }
  } return newArray
}

// -----User Interface Logic-----
$("document").ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const num = parseInt($("#input").val());
    const userInput = identify(num)
    $("span#results").html(userInput.join(", "));
  })
})