function mSW(){
    
    let mount=document.getElementById("mountain")
    if(mount.style.display=="none"){
        mount.style.display="block";
        document.querySelector('i').classList.remove("fa-angle-down")
        document.querySelector('i').classList.add("fa-angle-up")
    }else{
        mount.style.display="none";
        document.querySelector('i').classList.add("fa-angle-down")
        document.querySelector('i').classList.remove("fa-angle-up")
    }
}

function wSW(){
    
    let mount=document.getElementById("women")
    if(mount.style.display=="block"){
        mount.style.display="none";
        document.getElementsByClassName("fa")[1].classList.add("fa-angle-down")
        document.getElementsByClassName("fa")[1].classList.remove("fa-angle-up")
        
    }else{
        mount.style.display="block";
        document.getElementsByClassName("fa")[1].classList.add("fa-angle-up")
        document.getElementsByClassName("fa")[1].classList.remove("fa-angle-down");
       
    }
}
document.getElementsByClassName("add")[0].addEventListener('click',Add)
function Add(){
    let inp=document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].value=""
    if(inp!=""){document.getElementsByTagName('ol')[0].innerHTML+=`<li>${inp}</li>`}
}

document.getElementsByClassName("add")[1].addEventListener('click',Add2)
function Add2(){
    let inp=document.getElementsByTagName('input')[1].value;
    document.getElementsByTagName('input')[1].value=""
   if(inp!="") {document.getElementsByTagName('ol')[1].innerHTML+=`<li><img src="pics/Vector.png"/> ${inp}</li>`}
}
document.getElementsByClassName('tab')[0].style.background="white"
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var h=document.getElementById('mountain').offsetHeight-100
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
      document.getElementsByClassName("tab")[0].style.background = " rgb(217 217 217)";
      document.getElementsByClassName("tab")[1].style.background = "white";
    } else {
        document.getElementsByClassName("tab")[1].style.background = " rgb(217 217 217)";
        document.getElementsByClassName("tab")[0].style.background = "white";
    }
  }
 function Alert(event){
    alert (`Вы нажали ${event.target.innerHTML} кнопку`)
 }