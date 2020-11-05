function createStack() {
  let array = [];

  return {
    push: function (item) {
      //menambahkan
      array.push(item);
    },
    pop: function () {
      array.pop();
    },
    peek: function () {
      return array[array.length - 1];
    },
    size: function () {
      return array.length;
    },
  };
}

// inisialisasi
const bookStack = createStack();
// menambahkan data stack
bookStack.push("The Effective Engineer");
bookStack.push("The Pragmatic Programmer");
bookStack.push("Start With Why");
bookStack.push("Buku Sakti");
bookStack.push("Buku Sakti yess");
// melihat data stack
console.log(bookStack.peek());
// menghapus elemen trakhir
// bookStack.pop();
// bookStack.pop();
// console.log(bookStack.peek());
// console.log(bookStack.size());

// CALL STACK
function add(a, b) {
  return a + b;
}

function double(a) {
  return add(a, a);
}
console.log(double(12));
