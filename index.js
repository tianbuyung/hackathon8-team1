// render function

const DUMMY_DATA = [
  {
    title: "MANCHESTER PAYAH BANGET",
    author: "fachry",
    score: 0,
  },
  {
    title: "Manchester Payah Banget",
    author: "septian",
    score: 0,
  },
  {
    title: "MANCHESTER PAYAH BANGET COY!!!",
    author: "fahri",
    score: 0,
  },
  {
    title: "yakali dia PAYAH BANGET!!!",
    author: "septian",
    score: 0,
  },
  {
    title: "Pemilu 2024 mungkin ditiadakan berkat Euro",
    author : "dimas",
    score: 0
  },
  {
    title: "SemuaMungkinTidakSenang",
    author : "iqbal",
    score: 0
  },
  {
    title: "spider Man",
    author : "ardi",
    score: 0
  }

];

function render() {
  console.log(DUMMY_DATA);
}

//render();

function allUpperCaseScorer(arrObject) //Cek semua huruf kapital semua atau engga
{
  let status = Boolean  // default state
  
  for(const element of arrObject)
  {
    let str = ''
    let checker = ''
    for(let i = 0; i < element.title.length; i++)
    {
      str += element.title[i]
    }
    checker = str
    
    if(checker.toUpperCase() === str)
    {
      status = true
    }
    else
    {
      status = false
    }
    element.UpperCaseStatus = status
  }

  return arrObject

}
///console.log(allUpperCaseScorer(DUMMY_DATA))

function firstWordUpperCaseScorer(arrObject)
{
  console.log(arrObject)
}
//console.log(firstWordUpperCaseScorer(DUMMY_DATA))

function specialCharacterScorer(arrObject)
{
  let specChar = '~!@#$%^&*()'
  for(const e of arrObject)
  {
    let checkedSame = 0
    for(let i = 0; i < e.title.length; i++)
    {
      for(let y = 0; y < specChar.length; y++)
      {
        if(e.title[i] === specChar[y])
        {
          checkedSame ++
        }
      }
    }
    e.specChar = checkedSame
  }
  return arrObject
}
// console.log(specialCharacterScorer(DUMMY_DATA))


function findWord(arr){
    

  for(const e of arr){
   
   
   let titled = e.title
   
   let worded = 0
   let kategori = ""  
   
   
   
   for(let i = 0; i < titled.length; i++){
       if(titled[i] === " "){
         worded += 1
       }else if(i === titled[i].length -1){
           worded += 1
       }
     }
 e["word"] = worded
 if(e["word"] < 4){
   kategori = "short"
}else if(e["word"] < 5 ){
   kategori = "medium"
}else if(e["word"] > 5){
   kategori = "long"
}
e["Sentence Category"] = kategori
 
 }
  return arr
} 
// console.log(findWord(DUMMY_DATA))

function finalScorer (arrObject) /////////  PAKE FUNCTION YANG INI
{
  findWord(arrObject)
  specialCharacterScorer(arrObject)
  allUpperCaseScorer(arrObject)

  for(const e of arrObject)
  {
    let scr = 0
    if(e.UpperCaseStatus === true)
    {
      scr++
    }
    if(e.specChar > 2)
    {
      scr++
    } 
    if(e["Sentence Category"] === 'medium')
    {
      scr++
    }
    e.score = scr
  }

  return arrObject
}

console.log(finalScorer(DUMMY_DATA))