function createQueue() {
  const queue = [];

  return {
    endqueue: function (value) {
      queue.unshift(value);
    },
    dequeue: function () {
      queue.pop();
    },
    peek: function () {
      return queue[queue.length - 1];
    },
    size: function () {
      return queue.length;
    },
  };
}

const q = createQueue();
q.endqueue("Create script for data structure course");
q.endqueue("Create code example for data structure cource");
q.endqueue("Record data structure cource");
q.endqueue("Vacation");

console.log(q.size());
console.log(q.peek());

q.dequeue();

console.log(q.peek());
q.dequeue();

console.log(q.peek());
q.dequeue();

console.log(q.peek());
console.log(q.size());
