// function songDecoder(song) {
//     for (var i = 0; i < song.length; i++) {

//         if (song.charAt(i) == ' ' && song.charAt(i + 1) == ' ') {
//             song = song.slice(0, i) + " " + song.slice(i + 2, song.length);
//             i = 0;
//         } else if (song.charAt(i) == 'W') {

//             if (song.charAt(i + 1) == 'U' && song.charAt(i + 2) == 'B') {
//                 song = song.slice(0, i) + " " + song.slice(i + 3, song.length);
//                 i = 0;
//             }
//         }
//     }

//     return song.trim();
// }

function songDecoder(song){
    return song.replace(/(WUB)+/g, " ").trim();
    }


console.log(songDecoder("WUBAWUBBWUBCWUB"));