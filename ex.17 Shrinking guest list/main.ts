\
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
   console.log(`unfortunately, the new dinner table wont arrive on time, so i can only invite two guest to dinner with me`);

   while(guest_list.length >2){
    let removeguest =guest_list.pop();
    console.log(`sorry ${removeguest} I cant invite you to dinner `);
   }
   console.log("invitation last 2 guest "); 
   guest_list.forEach (lasttwo => console.log(`luckly ${lasttwo}, you are still imvited to dinner`));

guest_list.pop();
guest_list.pop();

console.log("Empty list", guest_list);