
//đóng mở menu
function menu(element, icon){
    if(element.style.display == "none"){
        element.style.display = "block";
        if(icon.classList.contains("fa-angle-down") == false){
            icon.classList.add("fa-angle-down");
            icon.classList.remove("fa-angle-left");
        }
    }
    else{
        element.style.display = "none";
        if(icon.classList.contains("fa-angle-down")){
            icon.classList.add("fa-angle-left");
            icon.classList.remove("fa-angle-down");
        }
    }
}