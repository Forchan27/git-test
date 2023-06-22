//document.body.innerHTML = '<h1>Hello from JavaScript</h1>'


const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)

const array = [32, 115, -14, -2, 5, 13, 26, 88]
function min(arr) {
   return Math.max(...arr)
}


console.log(min(array))