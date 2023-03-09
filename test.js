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

let newName = "Ardi";
let newID = 1;

if (data.length > 0) {
  newID = data[data.length - 1].id + 1;
}

console.log(newID, newName);
