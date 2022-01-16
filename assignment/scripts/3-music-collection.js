console.log('***** Music Collection *****');

let collection = []; // Variable that starts as an empty array

function addToCollection(title, artist, yearPublished) { // Start addToCollection function
  console.log('*** In addToCollection function ***');
  const album = {}; // Created the object album
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;

  collection.push(album); // This pushes the parameters into the empty collection array

  return album;

} // End addToCollection function

const myList = addToCollection( 'Sunshine', 'OneRepublic', 2021);
const myList1 = addToCollection( 'Mr. Brightside', 'The Killers', 2003);
const myList2 = addToCollection( 'Fine Apple', 'Nic D', 2021);
const myList3 = addToCollection( 'All The Small Things', 'Blink-182', 2000);
const myList4 = addToCollection( 'First Date', 'Blink-182', 2001);
const myList5 = addToCollection( 'Put Your Records On', 'Ritt Momney', 2020); // Adding addToCollection parameter values


console.log(myList); // This will test and log the values for myList
console.log(myList1); // This will test and log the values for myList1
console.log(myList2); // This will test and log the values for myList2
console.log(myList3); // This will test and log the values for myList3
console.log(myList4); // This will test and log the values for myList4
console.log(myList5); // This will test and log the values for myList5

console.log(collection); // This will log the values in the collection array

function showCollection(array) { // Start showCollection function
  console.log('*** In showCollection function ***');
  console.log(`There are ${array.length} items in the array`); // This will log the amount of items in the array
  for (let i of array) { // Start for of loop
    console.log(`${i.title} by ${i.artist}, published in ${i.yearPublished}`); // This will log each lists title, artist, and yearPublished when called
  }// End for of loop

} // End showCollection function
showCollection(collection); // Calling the showCollection function with the collection array

function findByArtist(artist) { // Start findByArtist function
  console.log('*** In findByArtist function ***');
  let artistList = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      artistList.push(collection[i].artist);
      console.log('Yes!'); // This will be logged if we find an artist in our array
    } // End if statement
  } // End for loop

  console.log(artistList);
} // End findByArtist function
console.log('Is there any Blink-182?');
findByArtist('Blink-182'); // This will log that there are two songs by Blink-182

console.log('Is there any Michael Jackson?');
findByArtist('Michael Jackson'); // This will log that there are no Michael Jackson songs

console.log('Is there any Nic D?');
findByArtist('Nic D'); // This will log that there is one song by Nic D
