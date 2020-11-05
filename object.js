let fruit = {
  name: "grape",
  description: "Popular and famous fruit",
  colors: ["purple", "green"],
  isSmall: true,
  order: 1,
};
// cara mengakses nilai object
console.log(fruit["description"]);
console.log(fruit.name);
// mencetak element yang tidak ada
console.log(fruit.owner || "Danil syah");
// mendapatkan key object
let keys = Object.keys(fruit);
console.log(keys);
// mendaptkan value object
let values = Object.values(fruit);
console.log(values);

let entries = Object.entries(fruit);
console.log(entries);

// menambahkan properties
fruit.price = 30000;
console.log(fruit);

// menghapus properti
delete fruit.order;
console.log(fruit);
