//ex.15
let guest_list : string [] = [`mariyam`,`farhan`,`noorfatima`,`faiza`];
let not_persent : string =`farhan`;
let new_persent : string = `Babar Azam`;
for(let i=0; i<guest_list.length; i++ ){
    console.log(`respacted sir/medam ` + guest_list[i] + `,\nwe invited you on dinner tomorrow.\nThank you\n`);
}
console.log(`Mr ${not_persent} will not coming tomorrow dinner.`);
//ex.16
guest_list.unshift(`shaheen`,`sarfraz`,`rizwan`);
for(let i=0; i<guest_list.length; i++ ){   
     console.log(`respacted sir/medam ` + guest_list[i] + `,\nwe invited you on dinner tomorrow.\nThank you\n`);
    
    }