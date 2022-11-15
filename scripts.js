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
        document.getElementsByClassName("fa")[1].classList.remove("fa-angle-down")
    }
}