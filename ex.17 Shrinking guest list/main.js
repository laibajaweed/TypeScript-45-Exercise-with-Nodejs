//ex.15
var guest_list = ["mariyam", "farhan", "noorfatima", "faiza"];
var not_persent = "farhan";
var new_persent = "Babar Azam";
for (var i = 0; i < guest_list.length; i++) {
    console.log("respacted sir/medam " + guest_list[i] + ",\nwe invited you on dinner tomorrow.\nThank you\n");
}
console.log("Mr ".concat(not_persent, " will not coming tomorrow dinner."));
//ex.16
guest_list.unshift("shaheen", "sarfraz", "rizwan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("respacted sir/medam " + guest_list[i] + ",\nwe invited you on dinner tomorrow.\nThank you\n");
}
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guest to dinner with me");
while (guest_list.length > 2) {
    var removeguest = guest_list.pop();
    console.log("sorry ".concat(removeguest, " I cant invite you to dinner "));
}
console.log("invitation last 2 guest ");
guest_list.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still imvited to dinner")); });
guest_list.pop();
guest_list.pop();
console.log("Empty list", guest_list);
