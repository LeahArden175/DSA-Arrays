//5. URLify a string
function URLify(str) {
  let ticks = 0;
  let url = str.replace(/ /g, "%20")
  ticks++
  return {
    result: url,
    ticks: ticks
}
}

console.log(URLify("tauhida parveen")) // { result: 'tauhida%20parveen', ticks: 1 }
console.log(URLify("www.thinkful.com /tauh ida parv een")) //{ result: 'www.thinkful.com%20/tauh%20ida%20parv%20een', ticks: 1 }



//Filtering an array
function filterArray(arr) {
  let result = []
  let ticks = 0

  for(let i = 0; i < arr.length; i++){
    if( arr[i] >= 5){
      result.push(arr[i])
      ticks++
    }
  }
  return {
    result,
    ticks: ticks
  }
}

console.log(filterArray([1,4,3,9,7,6,5])) //{ result: [ 9, 7, 6, 5 ], ticks: 4 }


// 7. Max sum in the array

function maxSum (arr){
  let sums = [];
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++){
    sums.push(currentSum += arr[i]);
  }
  for (let j = 0; j < sums.length; j++ ){
    if (sums[j] > maxSum){
      maxSum = sums[j];
    }
  }
  return maxSum;
}
console.log(maxSum([4, 6, -3, 5, -2, 1])); //12


//8. Merge arrays

function mergeArray(arr1, arr2) {
  let ans = [];
  let a = 0;
  let b = 0;
  let ticks = 0

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[a] <= arr2[b] || (typeof arr2[b] === 'undefined')) {
      ans.push(arr1[a]);
      a += 1;
      ticks++
    } else if ((arr1[a] > arr2[b]) || (typeof arr1[a] === 'undefined'))
     {
      ans.push(arr2[b]);
      b += 1;
      ticks++
    } else {
      //&& !(rPtr >= rArr.length)
      ticks++
    }
  }
  return {ans, ticks};

}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])) //{ ans: [ 1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11 ], ticks: 11 }



//9. Remove characters

// function removeChar(string, characters) {
//   let finalString = '';
//   let prevChar = 0;
//   let ticks = 0;

//   for(let i = 0; i < string.length; i++){
//     if( characters.includes(string[i]) || i === string.length) {
//       finalString += string.slice(prevChar, i)
//       prevChar = i + 1
//     }
//     ticks++
//   }
//   console.log({'ticks': ticks, 'result': finalString});
// }

// removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'); //38 ticks


function removeChar(str, rmv) {

  let ticks = 0

  for (let i = 0; i < rmv.length; i++) {
    let regex = new RegExp(rmv[i], "g");
    str = str.replace(regex, "");
    ticks++
  }
  console.log({str, ticks});
}

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'); //5 ticks


//10. Products

function productOfArrIndex(numbers){
  let newArr = [];
  let ticks = 0;

  for(let num of numbers){
    let product = 1;
    numbers.filter(x => x !== num).forEach(x => product *= x);
    newArr.push(product);
    ticks++;
  }
  
  console.log({'result': newArr, 'ticks': ticks});
}

productOfArrIndex([1, 3, 9, 4]); 


//11. 2D array


function twoD(arr) {
  let firstRow = false
  let row = arr.length
  let col = arr[0].length

  for (let i = 0; i < col; i++) {
      if (arr[0][i] === 0)
      firstRow = true
  }

  for (let r=0; r<row; r++){
      for (let c=0; c<col; c++){
          if (arr[r][c] == 0)
              arr[0][c] = 0;
      }
  }
  for (let r=1; r<row; r++){
      let rowZero = false;
      for (let c=0; c<col; c++){
          if (arr[r][c] == 0)
              rowZero = true;
      }
      for (let c=0; c<col; c++){
          if (rowZero || arr[0][c] == 0)
              arr[r][c] = 0;
      }
  }
  for (let c=0; c<col; c++){
      if (firstRow)
          arr[0][c] = 0;
  }
  return arr
}


console.log(twoD([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]))

//12. String rotation

function isRotation(str1,str2) {
  return (str1.length == str2.length && ((str1 + str1).indexOf(str2) != -1))
}

  console.log(isRotation("amazon", "azonam"))
  console.log(isRotation("amazon", "azonma"))