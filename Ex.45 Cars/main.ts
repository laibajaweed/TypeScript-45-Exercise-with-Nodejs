function create_car(manufacturer, modle, ...option){
//Initialize a car object with manufacturer and modle
let car = {
    manufacturer: manufacturer,
    modle: modle
};
//Add additional option to the car object
option.forEach(option => {
    let [key, Value] = option.split(":");
    car[key.trim()] = Value.trim();
});

return car;

}
//call the function to create a car object
let my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True");

//print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);