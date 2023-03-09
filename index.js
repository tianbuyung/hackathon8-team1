// Initialization function
const DUMMY_DATA = [
  {
    id: 1,
    title: "MANCHESTER PAYAH TUJUH KOSONG!!!",
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
    title: "Pemilu 2024 mungkin  ditiadakan berkat Euro",
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

// const newsList = document.querySelector("#newsList");
// const newsTable = document.getElementById("newsTable");

// let storage = [...DUMMY_DATA];

// finalScorer(storage);

// function init() {
//   for (let i = 0; i < storage.length; i++) {
//     const element = storage[i];
//     // console.log(element);
//     const colSm4 = document.createElement("div");
//     colSm4.classList.add("col-sm-4");
//     colSm4.classList.add("mb-3");
//     const card = document.createElement("div");
//     card.classList.add("card");
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
//     const cardTitle = document.createElement("h5");
//     cardTitle.classList.add("card-title");
//     cardTitle.innerText = element.title;
//     const cardText = document.createElement("p");
//     cardText.classList.add("card-text");
//     cardText.innerText = `Score this headline is ${element.score}`;
//     // <a href="#" class="btn btn-primary">Go somewhere</a>
//     const btnCard = document.createElement("a");
//     btnCard.classList.add("btn");
//     btnCard.classList.add("btn-primary");
//     btnCard.href = "#";
//     btnCard.innerText = "Go somewhere";

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);
//     cardBody.appendChild(btnCard);
//     card.appendChild(cardBody);
//     colSm4.appendChild(card);
//     newsList.appendChild(colSm4);

//     const tableRow = document.createElement("tr");
//     const tableTh = document.createElement("th");
//     tableTh.scope = "row";
//     tableTh.innerText = i + 1;
//     const tableTd1 = document.createElement("td");
//     tableTd1.innerText = element.title;
//     const tableTd2 = document.createElement("td");
//     tableTd2.innerText = element.score;

//     tableRow.appendChild(tableTh);
//     tableRow.appendChild(tableTd1);
//     tableRow.appendChild(tableTd2);
//     newsTable.appendChild(tableRow);
//   }
// }

// init();

// // form submission
// const addBtn = document.getElementById("addBtn");
// const formTitle = document.getElementById("title");
// const formAuthor = document.getElementById("author");

// addBtn.addEventListener("click", (event) => {
//   event.preventDefault(); // stop refresh
//   addNews();
// });

// const createId = (data) => {
//   let newID = 1;

//   if (data.length > 0) {
//     newID = data[data.length - 1].id + 1;
//   }

//   return newID;
// };

// function addNews() {
//   const title = formTitle.value;
//   const author = formAuthor.value;
//   const id = createId(storage);

//   let data = {
//     id,
//     title,
//     author,
//     score: 0,
//   };

//   console.log(data);
//   storage.push(data);
//   console.log(storage);
//   // panggil function finalScorer
//   finalScorer(storage);
//   showCard();
//   showTable();
// }
// // end form submission

// // create show card
// // const newsList = document.querySelector("#newsList");

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
// // end show card

// // showTable
// // const newsTable = document.getElementById("newsTable");

// function showTable() {
//   // for (let i = 0; i < storage.length; i++) {
//   const element = storage[storage.length - 1];
//   // console.log(element);
//   const tableRow = document.createElement("tr");
//   const tableTh = document.createElement("th");
//   tableTh.scope = "row";
//   tableTh.innerText = storage.length;
//   const tableTd1 = document.createElement("td");
//   tableTd1.innerText = element.title;
//   const tableTd2 = document.createElement("td");
//   tableTd2.innerText = element.score;

//   tableRow.appendChild(tableTh);
//   tableRow.appendChild(tableTd1);
//   tableRow.appendChild(tableTd2);
//   newsTable.appendChild(tableRow);
//   // }
// }

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

function doubleSpace(arrObject) {
  // console.log(arrObject);
  let status = false
  for(const e of arrObject)
  {
    for(let i = 0; i < e.title.length; i++)
    {
      if(e.title[i] === ' ' && e.title[i+1] === ' ')
      {
        status = true
      }
    }
    e.doubleSpace = status
  }
  return arrObject
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



function findWord(arr){
    

  for(const e of arr){
   
   
   let titled = e.title
   
   let worded = 0
   let kategori = ""  
   let kalimat = false
   
   
   for(let i = 0; i < titled.length; i++){
     if(titled[i] === " "){
       worded += 1
     }else if(i === titled[i].length -1){
       worded += 1
     }
   }
   for(let j = 0; j < titled.length; j++){
     
       if(titled[j] === "."){
         kalimat = true
         break;
       }else if(titled[titled.length -1] === "."){
         kalimat = false
         break;
          }
     }
 e["sentence"] = kalimat
 e["word"] = worded
 if(e["word"] < 4){
   kategori = "short"
}else if(e["word"] < 5 ){
   kategori = "medium"
}else if(e["word"] > 5){
   kategori = "long"
}
e["category"] = kategori
 
 }
  return arr
} 


function finalScorer(arrObject) {
  /////////  PAKE FUNCTION YANG INI
  findWord(arrObject);
  specialCharacterScorer(arrObject);
  allUpperCaseScorer(arrObject);
  doubleSpace(arrObject)

  for (const e of arrObject) {
    let scr = 7;
    if (e.UpperCaseStatus === true) {

      scr++;
    }
    if (e.specChar > 1 && e.specChar <=3) {
      scr++;
    }
    if (e["Sentence Category"] === "medium") {
      scr++;
    }
    if(e.sentence === true)
    {
      scr --;
    }
    if(e.specChar > 3 )
    {
      scr --;
    }
    if(e.title.length > 28 && e.title.length < 36)
    {
      scr ++;
    }
    if(doubleSpace === true)
    {
      scr--;
    }
   
   
    e.score = scr;
    
  }
for(const e of arrObject){

  if(e.score < 6)
  {
    e.message = 'It can be improved'
  }
  else if (e.score === 6)
  {
    e.message = 'Good, But we can make it better'
  }
  else if(e.score > 7 && e.score < 9)
  {
    e.message = 'Well, a slight improvement is needed'
  }
  else if(e.score >= 9)
  {
    e.message = "This is the title that rings in people's ears"
  }
}
  console.log(arrObject)
  return arrObject;
}

console.log(finalScorer(DUMMY_DATA));