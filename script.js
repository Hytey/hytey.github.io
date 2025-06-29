var Welcome_Heading = document.getElementById('Welcome_Heading')
var Welcome_Heading_Inside = 'Welcome to Ramda Guest House'
let Random_Variable = 0;

window.onload = function(){
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(Scroll_Function,5000)
}

const Writing_Interval = setInterval(Writing_Function,150)
function Writing_Function(){
    if (Welcome_Heading.textContent.length<Welcome_Heading_Inside.length) {
        console.log(Welcome_Heading_Inside.innerText)
        Welcome_Heading.textContent += Welcome_Heading_Inside[Random_Variable]
        Random_Variable++
        console.log(window.scrollY)
    }else{
    }
}


function Scroll_Function(){
    console.log(scrollX, typeof(scrollX))
    if(scrollX==0){
    window.scroll({
  top: window.innerHeight, 
  left: 0, 
  behavior: 'smooth' 
});   
    window.scrollBy(0,window.innerHeight)
}
}