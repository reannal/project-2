// jshint esversion: 6

//revWord1 with for loop
let revWordsA = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};

let revWords1 = (sent) => {
  let arr = sent.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result = result + revWordsA(arr[i]) + " ";
  }
  return result;
};

//revWord2 with forEach
let revWordA = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};

let revWords2 = (sent) => {
  let arr = sent.split(" ");
  let result = "";
  arr.forEach((char) => {
    result = result + revWordA(char) + " " ;
  });
  return result;
};

//revWord3 with for of loop and arrow syntax
let revWordsA = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};

let revWords3 = (sent) => {
  let arr = sent.split(" ");
  let result = "";
  for (char of arr) {
    result = result + revWordsA(char) + " ";
  }
  return result;
};

//extra credit
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
