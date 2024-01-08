console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
  const newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } ;
  collection.push(newAlbum);
  return newAlbum;
}
addToCollection(myCollection, 'Boston', 'Boston', 1976);
addToCollection(myCollection, 'Physical Graffiti', 'Led Zeppelin', 1975);
addToCollection(myCollection, 'Nevermind', 'Nirvana', 1991);
addToCollection(myCollection, 'The Stranger', 'Billy Joel', 1977);
addToCollection(myCollection, 'Led Zeppelin II', 'Led Zeppelin', 1969);
addToCollection(myCollection, 'Metallica', 'Metallica', 1991);
console.log(myCollection);

function showCollection(collection) {
  for (let i = 0; i < myCollection.length; i++) {
    console.log(collection[i].title + ' by ' + collection[i].artist + ', released in ' + collection[i].yearPublished);
  }
} ; 
showCollection(myCollection);





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
