
let items = document.querySelectorAll(".item")

function collapse(element1, element2, element3, element4){
    element1.style.display = "block"
    element2.style.display = "none"
    element3.style.color = "#c40001"
    element3.style.background = "white"
    element4.style.color = "black"
    element4.style.background = "#f0f0f0"
}

function hover(element1){
    for(var i=0; i<items.length; i++){
        items[i].style.display = "none"
    }
    element1.style.display = "block"
}

