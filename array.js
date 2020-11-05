let fruits = ["grapes", "manggo", "cherry", "orange"];
// menampilkan data array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// menambahkan element data di akhir array
fruits.push("banana");
console.log(fruits);

// menghapus element
var removeItem = fruits.indexOf("cherry");
fruits.splice(removeItem, 1);

console.log(fruits);
console.log(removeItem);
