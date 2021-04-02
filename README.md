Specs

Describe identifyOne()
Test: It should return an array of numbers.
Code: identifyOne("564")
Expected Output: ["5", "6", "4"]

Test: If a number is 1 replace it with "Beep!"
Code identifyOne("1")
Expected Output: ["Beep!"]

Test: If the number has multiple 1's console log multiple beep's.
Code identifyOne("12341")
Expected Output: (2)beep

Test: It should return an array of numbers but push Beep! if it's a one
Code: identifyOne("234561")
Expected Output: ["2", "3", "4", "5", "6", "Beep!"]

Test: It should return "Boop!" for the number 2.
Code: identifyOne("123")
Expected Output: ["Beep!", "Boop!", "3"]

Test: It should return "Won't you be my neighbor?" for the number 3.
Code: identifyOne("1234")
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?", "4"]


