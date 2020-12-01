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

//