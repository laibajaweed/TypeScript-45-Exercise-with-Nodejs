//creating a function 
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album:{artist: string, title: string, tracks?: number} = {
artist: artist_name,
title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

///calling three function with different  values

let album1 = make_album("Laiba", "Album title 1");

let album2 = make_album("Mariyam", "Album title 2");
//calling a make _albun function with third parameter

let album3 = make_album("Maha", "Album title 3 ", 10);

//printing values of our object created my function 
console.log(album1);

console.log(album2);

console.log(album3);





