'use strict'

const img =document.querySelectorAll("img")
const div = document.querySelector("#obraz img")
img.forEach( elem =>{
    elem.addEventListener('click',()=>{
       let big = elem.src.replace('_min','')
    //    div.innerHTML=`<img src="${big}">`
        div.src=big
})
})