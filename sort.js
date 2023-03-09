let data = [
  {
    id: 1,
    name: "JUan",
  },
  {
    id: 2,
    name: "Joshua",
  },
  {
    id: 3,
    name: "Radit",
  },
];

let sorted = [...data];

sorted.sort((a, b) => {
  return b.name - a.name;
});

console.log(data);
console.log(sorted);
