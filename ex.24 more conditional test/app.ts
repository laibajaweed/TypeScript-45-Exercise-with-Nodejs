let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty =20;
let fruits = ["apple", "banana", "orange"];

//test for equlity and inequality with string

console.log("Is apple is equal to apple?");
console.log(apple == "apple?");

console.log("\nits apple is not equal to apple");
console.log(apple != "apple");

//Test using  Lowercase Funtion
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() =="apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//numberical test
//Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty );

//not Equal  to
console.log("\nis ten is not equal to  twenty?");
console.log(ten != twenty);

//greater than zero 
console.log("\nIs ten is greater than zero?");
console.log( ten > 0);

//less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs  ten is greater than or equal to 5?");
console.log(ten >=5);

//test than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

//test using "and" & "or operators

//using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 100 && twenty > 30);

//using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 >50 || 20 == 20);

console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 >50 || 20 != 20);

//test whethr an item  is include in array
console.log("\nIs orange include in my fruits array");
console.log (fruits.includes("orange"));

//not include
console.log("\nis orange not incluude  in my fruits array");
console.log(!fruits.includes("orange"));