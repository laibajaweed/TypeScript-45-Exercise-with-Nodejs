var guest_list = ["mariyam", "farhan", "noorfatima", "faiza"];
//for(let i=0; i<guest_list.length; i++ ){
//  console.log(`respacted sir/medam ` + guest_list[i] + `,\nwe invited you on dinner tomorrow.\nThank you\n`);
//ex.15
var not_persent = "farhan";
var new_persent = "Babar Azam";
for (var i = 0; i < guest_list.length; i++) {
    console.log("respacted sir/medam " + guest_list[i] + ",\nwe invited you on dinner tomorrow.\nThank you\n");
}
console.log("Mr ".concat(not_persent, " will not coming tomorrow dinner."));
guest_list.unshift("shaheen", "sarfraz", "rizwan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("respacted sir/medam " + guest_list[i] + ",\nwe invited you on dinner tomorrow.\nThank you\n");
}
