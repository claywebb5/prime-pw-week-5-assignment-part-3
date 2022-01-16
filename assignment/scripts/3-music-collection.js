console.log('***** Music Collection *****');

let collection = [];

function addToCollection(title, artist, yearPublished) {
  const album = {};
    album.title = title,
    album.artist = artist,
    album.yearPublished = yearPublished

  collection.push(album.title, album.artist, album.yearPublished);

  return album;

}

const myList = addToCollection( 'Sunshine', 'OneRepublic', 2021);
const myList1 = addToCollection( 'Mr. Brightside', 'The Killers', 2003);
const myList2 = addToCollection( 'Fine Apple', 'Nic D', 2021);
const myList3 = addToCollection( 'All The Small Things', 'Blink-182', 2000);
const myList4 = addToCollection( 'First Date', 'Blink-182', 2001);
const myList5 = addToCollection( 'Put Your Records On', 'Ritt Momney', 2020);

collection.push(myList, myList1, myList2, myList3, myList4, myList5);

console.log(myList);
console.log(myList1);
console.log(myList2);
console.log(myList3);
console.log(myList4);
console.log(myList5);

console.log(myList.title);
console.log(collection[0], collection[1], collection[2]);
