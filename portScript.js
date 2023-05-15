
let nav=document.querySelector('.nav')
let dark=document.querySelector('.dark')
let light=document.querySelector('.light')
let menu=document.getElementById("menu2")
let M=document.querySelector(".M")
   let L=document.querySelector(".L")
   let U=document.querySelector(".U")

   let S=document.getElementById('S')
   let T=document.getElementById('T')
   let Asi=0
let count=1
let side=0
function theme(){
    let body=document.querySelector("body")
    
    if(count===0){
        L.style.backgroundColor="white"
        M.style.backgroundColor="white"
        U.style.backgroundColor="white"
        // body
        body.style.backgroundColor="#06191D"
        body.style.color="white"
        
        nav.style.backgroundColor="#06191D"
        nav.style.color="white"
        light.style.transform='translateX(0px)'
        light.style.transition='1s'
        count++
    }
   else{
    L.style.backgroundColor="#06191D"
        M.style.backgroundColor="#06191D"
        U.style.backgroundColor="#06191D"
        // body
        body.style.backgroundColor="white"
        body.style.color="#06191D"
       
    nav.style.backgroundColor="whitesmoke"
    nav.style.color="#06191D"
    light.style.transform='translateX(-30px)'
    light.style.transition='1s'
    count--
   }
}

// sidebar

function sidebar(){
   

   if(side===0){
    menu.style.height="100vh"
   menu.style.width="400px"
   menu.style.transition="1s"
 M.style.display="none"
 L.classList.add('Lm')
 U.classList.add('Um')
   side++
   }
   else{
    menu.style.height="0px"
   menu.style.width="0px"
   menu.style.transition="1s"
   M.style.display="block"
   L.classList.remove('Lm')
//    U.style.transform='translateY(10px)'
//    L.style.transform='translateY(-5px)'
   U.classList.remove('Um')
   side--
   }
    
}
// Asit animation
function Asit(){
    // S.style.transition="1s"
    // I.style.transition="1s"
   if(Asi===0){
    S.style.width="20px"
    S.style.display="flex"
    T.style.width="20px"
    T.style.display="flex"
    Asi++
   }
   else{
    S.style.width="0px"
    
    T.style.width="0px"
    Asi--
   }
  
    
}
// expand
let expand=document.getElementById("expand")
expand.addEventListener("click",(e)=>{
    console.log()
    if(e.target.parentElement.firstElementChild.innerText==="more"){
        e.target.parentElement.firstElementChild.innerText="less"
        // Then Add
        let add=e.target.parentElement.offsetHeight+80
    e.target.parentElement.style.height=`${add}px`
    }
    else{
        e.target.parentElement.firstElementChild.innerText="more"
        // Then Decrement
        let add=e.target.parentElement.offsetHeight-80
    e.target.parentElement.style.height=`${add}px`
    }
    
})
let expand2=document.getElementById("expand2")
expand2.addEventListener("click",(e)=>{
    console.log(e.target.parentElement.firstElementChild.innerText)
   
    if(e.target.parentElement.firstElementChild.innerText==="more"){
        e.target.parentElement.firstElementChild.innerText="less"
        // Then Add
        let add=e.target.parentElement.offsetHeight+100
    e.target.parentElement.style.height=`${add}px`
    }
    else{
        e.target.parentElement.firstElementChild.innerText="more"
        // Then Decrement
        let add=e.target.parentElement.offsetHeight-100
    e.target.parentElement.style.height=`${add}px`
    }

    
    
})


// carasole
let images1=document.querySelectorAll(".images")
let dot=document.querySelectorAll(".dot")

let countC=0

let carasole=document.getElementById("carasole")

carasole.addEventListener("click",()=>{
console.log(images1)
console.log(countC)
if(countC>3){
countC=0
// images1[count].style.height="auto"
// images1[count].style.transition="1s"
}
for (let int = 0; int < images1.length; int++) {
  images1[int].style.height="0px"
  images1[int].style.transition="1s"
  dot[int].style.backgroundColor="gray"
console.log(int)
if(int===countC){
  dot[countC].style.backgroundColor="black"
  images1[countC].style.height="70vh"
images1[countC].style.transition="1s"
}
  
}


countC++


})
