// Initialization function
const DUMMY_DATA = [
  {
    id: 1,
    title: "MANCHESTER PAYAH BANGET",
    author: "fachry",
    score: 0,
    imgUrl: "",
  },
  {
    id: 2,
    title: "Manchester Payah Banget",
    author: "septian",
    score: 0,
    imgUrl: "",
  },
  {
    id: 3,
    title: "MANCHESTER PAYAH BANGET!!!",
    author: "fahri",
    score: 0,
    imgUrl: "",
  },
  {
    id: 4,
    title: "yakali dia PAYAH BANGET!!!",
    author: "septian",
    score: 0,
    imgUrl: "",
  },
  {
    id: 5,
    title: "Pemilu 2024 mungkin ditiadakan berkat Euro",
    author: "dimas",
    score: 0,
    imgUrl: "",
  },
  {
    id: 6,
    title: "SemuaMungkinTidakSenang",
    author: "iqbal",
    score: 0,
    imgUrl: "",
  },
  {
    id: 7,
    title: "spider Man",
    author: "ardi",
    score: 0,
    imgUrl: "",
  },
];

const newsList = document.querySelector("#newsList");
const newsTable = document.getElementById("newsTable");

let storage = [...DUMMY_DATA];

finalScorer(storage);

function init() {
  for (let i = 0; i < 3; i++) {
    const element = storage[i];
    // console.log(element);
    const colSm4 = document.createElement("div");
    colSm4.classList.add("col-sm-4");
    colSm4.classList.add("mb-3");
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = element.title;
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = `Score this headline is ${element.score}`;
    // <a href="#" class="btn btn-primary">Go somewhere</a>
    const btnCard = document.createElement("a");
    btnCard.classList.add("btn");
    btnCard.classList.add("btn-primary");
    btnCard.href = "#";
    btnCard.innerText = "Go somewhere";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnCard);
    card.appendChild(cardBody);
    colSm4.appendChild(card);
    newsList.appendChild(colSm4);
  }

  for (const [i, element] of storage.entries()) {
    const tableRow = document.createElement("tr");
    const tableTh = document.createElement("th");
    tableTh.scope = "row";
    tableTh.innerText = i + 1;
    const tableTd1 = document.createElement("td");
    tableTd1.innerText = element.title;
    tableTd1.style.textAlign = "left";
    const tableTd2 = document.createElement("td");
    tableTd2.innerText = element.score;
    const tableTd3 = document.createElement("td");
    tableTd3.innerHTML = `<i class="bi bi-trash3"></i>`;

    tableRow.appendChild(tableTh);
    tableRow.appendChild(tableTd1);
    tableRow.appendChild(tableTd2);
    tableRow.appendChild(tableTd3);
    newsTable.appendChild(tableRow);
  }
}

init();

// form submission
const addBtn = document.getElementById("addBtn");
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");

addBtn.addEventListener("click", (event) => {
  event.preventDefault(); // stop refresh
  const title = formTitle.value.trim();
  const author = formAuthor.value.trim();
  const id = createId(storage);
  console.log(title.length, author.length);

  if (title.length === 0) {
    return;
  }
  if (author.length === 0) {
    return;
  }

  addNews(title, author, id);
});

const createId = (data) => {
  let newID = 1;

  if (data.length > 0) {
    newID = data[data.length - 1].id + 1;
  }

  return newID;
};

// validation form
function checkForm() {
  const title = formTitle.value.trim();
  const author = formAuthor.value.trim();

  if (title === "") {
    formTitle.style.borderColor = "red";
  }
  if (author === "") {
    formAuthor.style.borderColor = "red";
  }
}

addBtn.addEventListener("click", checkForm, true);

function removeError() {
  const title = formTitle.value;
  const author = formAuthor.value;

  if (title !== "") {
    formTitle.style.borderColor = "unset";
  }
  if (author !== "") {
    formAuthor.style.borderColor = "unset";
  }
}

formTitle.addEventListener("keydown", removeError);
formAuthor.addEventListener("keydown", removeError);

function addNews(title, author, id) {
  let data = {
    id,
    title,
    author,
    score: 0,
  };

  console.log(data);
  storage.push(data);
  console.log(storage);
  // panggil function finalScorer
  finalScorer(storage);
  // showCard();
  showTable();
}
// end form submission

// create show card
// const newsList = document.querySelector("#newsList");

// function showCard() {
//   // console.log(DUMMY_DATA);
//   // for (let i = 0; i < storage.length; i++) {
//   const element = storage[storage.length - 1];
//   // console.log(element);
//   const colSm4 = document.createElement("div");
//   colSm4.classList.add("col-sm-4");
//   colSm4.classList.add("mb-3");
//   const card = document.createElement("div");
//   card.classList.add("card");
//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");
//   const cardTitle = document.createElement("h5");
//   cardTitle.classList.add("card-title");
//   cardTitle.innerText = element.title;
//   const cardText = document.createElement("p");
//   cardText.classList.add("card-text");
//   cardText.innerText = `Score this headline is ${element.score}`;
//   // <a href="#" class="btn btn-primary">Go somewhere</a>
//   const btnCard = document.createElement("a");
//   btnCard.classList.add("btn");
//   btnCard.classList.add("btn-primary");
//   btnCard.href = "#";
//   btnCard.innerText = "Go somewhere";

//   cardBody.appendChild(cardTitle);
//   cardBody.appendChild(cardText);
//   cardBody.appendChild(btnCard);
//   card.appendChild(cardBody);
//   colSm4.appendChild(card);
//   newsList.appendChild(colSm4);
//   // }
// }
// end show card

// showTable
// const newsTable = document.getElementById("newsTable");

function showTable() {
  // for (let i = 0; i < storage.length; i++) {
  const element = storage[storage.length - 1];
  // console.log(element);
  const tableRow = document.createElement("tr");
  const tableTh = document.createElement("th");
  tableTh.scope = "row";
  tableTh.innerText = storage.length;
  const tableTd1 = document.createElement("td");
  tableTd1.innerText = element.title;
  tableTd1.style.textAlign = "left";
  const tableTd2 = document.createElement("td");
  tableTd2.innerText = element.score;

  tableRow.appendChild(tableTh);
  tableRow.appendChild(tableTd1);
  tableRow.appendChild(tableTd2);
  newsTable.appendChild(tableRow);
  // }
}

function showHeadlineNews() {}

function allUpperCaseScorer(arrObject) {
  //Cek semua huruf kapital semua atau engga
  let status = Boolean; // default state

  for (const element of arrObject) {
    let str = "";
    let checker = "";
    for (let i = 0; i < element.title.length; i++) {
      str += element.title[i];
    }
    checker = str;

    if (checker.toUpperCase() === str) {
      status = true;
    } else {
      status = false;
    }
    element.UpperCaseStatus = status;
  }

  return arrObject;
}
///console.log(allUpperCaseScorer(DUMMY_DATA))

function firstWordUpperCaseScorer(arrObject) {
  // console.log(arrObject);
}
//console.log(firstWordUpperCaseScorer(DUMMY_DATA))

function specialCharacterScorer(arrObject) {
  let specChar = "~!@#$%^&*()";
  for (const e of arrObject) {
    let checkedSame = 0;
    for (let i = 0; i < e.title.length; i++) {
      for (let y = 0; y < specChar.length; y++) {
        if (e.title[i] === specChar[y]) {
          checkedSame++;
        }
      }
    }
    e.specChar = checkedSame;
  }
  return arrObject;
}
// console.log(specialCharacterScorer(DUMMY_DATA))

function findWord(arr) {
  for (const e of arr) {
    let titled = e.title;

    let worded = 0;
    let kategori = "";

    for (let i = 0; i < titled.length; i++) {
      if (titled[i] === " ") {
        worded += 1;
      } else if (i === titled[i].length - 1) {
        worded += 1;
      }
    }
    e["word"] = worded;
    if (e["word"] < 4) {
      kategori = "short";
    } else if (e["word"] < 5) {
      kategori = "medium";
    } else if (e["word"] > 5) {
      kategori = "long";
    }
    e["Sentence Category"] = kategori;
  }
  return arr;
}
// console.log(findWord(DUMMY_DATA))

function finalScorer(arrObject) {
  /////////  PAKE FUNCTION YANG INI
  findWord(arrObject);
  specialCharacterScorer(arrObject);
  allUpperCaseScorer(arrObject);

  for (const e of arrObject) {
    let scr = 0;
    if (e.UpperCaseStatus === true) {
      scr++;
    }
    if (e.specChar > 2) {
      scr++;
    }
    if (e["Sentence Category"] === "medium") {
      scr++;
    }
    e.score = scr;
  }

  return arrObject;
}

console.log(finalScorer(DUMMY_DATA));
