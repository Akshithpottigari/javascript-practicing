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
    List[0].style.backgroundColor = "yellow"
}

// getelementbytagname

var litag = document.getElementsByTagName("li")
for(let i = 0; i<litag.length; i++){
    litag[i].style.backgroundColor = "orange"
}

// queryselector
// it accepts tags, classes and ids
// it only changes first occurence of the query, it doesnot apply to the next one's
// Toc access the inbetween elements, we can use last-child and Nth-child(n)
var query = document.querySelector('input[type="text"]')
query.value = "Your name"

//Nth child
var nth_child = document.querySelector(".Lists:nth-child(2)")
nth_child.style.color = "crimson"

// to access the last child, simply use Lists[Lists.length - 1]

// Queryselectorall

var queryAllOdd = document.querySelectorAll("li:nth-child(odd)")
var queryAllEven = document.querySelectorAll("li:nth-child(even)")
for(let i = 0; i<queryAllOdd.length; i++){
    queryAllOdd[i].style.backgroundColor = "cyan"
    queryAllEven[i].style.backgroundColor = "blue"
}