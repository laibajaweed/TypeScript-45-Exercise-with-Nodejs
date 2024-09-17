var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making  a Array conteries and print  its orginal order
var counteriesTovisit = ["China", "Danmark", "Brazil", "Argentina"];
console.log("oringal order:", counteriesTovisit);
//print the Array in alfabetical order without modifying the actual Array list
console.log("Alfabetical order:", __spreadArray([], counteriesTovisit, true).sort());
//show that the array is still in its orignal order
console.log("Still in orignal order:", counteriesTovisit);
//print the array in revrse order without modifying the actual array list
console.log("Reverse order", __spreadArray([], counteriesTovisit, true).reverse());
//show that the array is still in its orignal order
console.log("still in orignal order:", counteriesTovisit);
//we have change the orignal Array order now
console.log("orignal Array Reverse:", counteriesTovisit.reverse());
//print the array to show tthat to it`s back to its orignal order
console.log("back to orignal order:", counteriesTovisit.reverse());
//print the array to show that its order order has been change in Alphabetical order now
console.log("sorted in Alphabetical order:", counteriesTovisit.sort());
//we have change again the orignal Array order now in reverse order aagain
console.log("orignal Array Reverse:", counteriesTovisit.reverse());
