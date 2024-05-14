//Define a function with a rest parameter that accept items arguments representingouer sandwich
function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the following items: ");

    items.forEach(singleItem => console.log(singleItem));

    console.log("Now Enjoy Sandwich");
}

//call the function 3 items with 3 different number of arguments

makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");