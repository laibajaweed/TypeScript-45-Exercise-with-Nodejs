//creating a function with parameters which return a values in string

function city_country(city: string, country: string):string{
    return`${city} , ${country}`;
}
//calling a function and print a returned vslue

console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan") );
console.log(city_country("Berlin", "Germany"));