let change_Colour_Btn = document.getElementById("exampleColorInput")
let colourBody = document.querySelector(".btn")

console.log(`${change_Colour_Btn.value}`)
console.log(colourBody)

change_Colour_Btn.addEventListener("input", myfun)

function myfun() {
 document.body.style.background=`${change_Colour_Btn.value}`
 let itext = `${change_Colour_Btn.value}`
 let set =  colourBody.innerText = itext
  // console.log(set)
  //*******************************//
  
  
  // colourBody.innerHTML('')
}
