//getelementbyID

function colorchange(){
    let color = document.getElementById("demo")
    color.style.color = "red"
}

function BackgroundColorChange(){
    let color = document.body.style.backgroundColor = "green"
color.style.backgroundColor = "black"
}

// getelementbyclass

function ChangeListtext(){
    let List = document.getElementsByClassName("Lists")
    List[0].textContent = "Juice"
    List[0].style.color = "Magenta"
}