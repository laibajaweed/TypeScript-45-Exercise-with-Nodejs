function create_car(manufacturer, modle) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacturer and modle
    var car = {
        manufacturer: manufacturer,
        modle: modle
    };
    //Add additional option to the car object
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], Value = _a[1];
        car[key.trim()] = Value.trim();
    });
    return car;
}
//call the function to create a car object
var my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True");
//print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
