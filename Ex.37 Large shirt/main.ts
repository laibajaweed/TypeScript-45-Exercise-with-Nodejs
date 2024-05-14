//Making a function
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
} 

//Calling a function with by default value
make_shirt();

//calling a function now with medium  size and default message
make_shirt("Medium")

// calling a function now  with small size also  Different print message
make_shirt("Small", "I Love JavaScript")