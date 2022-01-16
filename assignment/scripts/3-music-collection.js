console.log('***** Music Collection *****');

let collection = []; // Variable that starts as an empty array

function addToCollection(title, artist, yearPublished) { // Start addToCollection function
  const album = {}; // Created the object album
    album.title = title,
    album.artist = artist,
    album.yearPublished = yearPublished

  collection.push(album.title, album.artist, album.yearPublished); // This pushes the parameters into the empty collection array

  return album;

} // End addToCollection function

const myList = addToCollection( 'Sunshine', 'OneRepublic', 2021);
const myList1 = addToCollection( 'Mr. Brightside', 'The Killers', 2003);
const myList2 = addToCollection( 'Fine Apple', 'Nic D', 2021);
const myList3 = addToCollection( 'All The Small Things', 'Blink-182', 2000);
const myList4 = addToCollection( 'First Date', 'Blink-182', 2001);
const myList5 = addToCollection( 'Put Your Records On', 'Ritt Momney', 2020); // Adding addToCollection parameter values

collection.push(myList, myList1, myList2, myList3, myList4, myList5); // This pushes the new albums values into the collection array

console.log(myList); // This will test and log the values for myList
console.log(myList1); // This will test and log the values for myList1
console.log(myList2); // This will test and log the values for myList2
console.log(myList3); // This will test and log the values for myList3
console.log(myList4); // This will test and log the values for myList4
console.log(myList5); // This will test and log the values for myList5

console.log(collection); // This will log the values in the collection array
