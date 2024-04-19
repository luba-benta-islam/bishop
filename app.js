// only for responsive
const navBar = document.getElementById("nav_bar");
let visibleNav = false;

const handelMenu = () =>{
    navBar.classList.add('animate__backOutDown')
    if(visibleNav){
        console.log("visible_state");
        navBar.style.display="none";
        
        visibleNav=false;
    }
    else{
        console.log("visible_false")
        navBar.style.display="block";
        visibleNav=true;
    }
    
}