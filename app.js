function searchFu() {
    let input = document.getElementById("input").value
    input = input.toLowerCase()
    let user = document.getElementsByClassName("userName")
    let userBox = document.getElementsByClassName("user")

    for (i = 0; i < user.length; i++) {
        if (!user[i].innerHTML.toLowerCase().includes(input)){
            userBox[i].style.display = "none"
        } else {
            userBox[i].style.display = "flex"
        }
    }
}

function changeTheme() {
    if (document.getElementById("theme").checked == true && document.getElementById("icon").className === "ri-moon-line") {
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById("icon").className = "ri-sun-line"
        
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById("icon").className = "ri-moon-line"
    }
}

function addContact() {
    if (this.click) {
        document.getElementById("cont").style.display = "block";
        document.getElementById("addBox").style.display = "none";
    } else {
        document.getElementById("cont").style.display = "none";
        document.getElementById("addBox").style.display = "block";
    }
}

function cencel() {
    if (this.click) {
        document.getElementById("cont").style.display = "none";
        document.getElementById("addBox").style.display = "block";
    } else {
        document.getElementById("cont").style.display = "block";
        document.getElementById("addBox").style.display = "none";
    }
}

// Add contact
function contact() {
    let ul = document.getElementById("ul")

    let li = document.createElement("li")
    li.setAttribute("class", "user")

    let tagImg = document.createElement("img")
    tagImg.src = "src/1.jpg"

    let tagDiv = document.createElement("div")
    tagDiv.setAttribute("class", "userBox")

    let tagPName = document.createElement("p")
    tagPName.setAttribute("class", "userName")
    
    let tagPTime = document.createElement("p")
    tagPTime.setAttribute("class", "time")

    let firstName = document.getElementById("fName").value
    let lastName = document.getElementById("lName").value
    let inpNum = document.getElementById("inpNum").value

    tagPName.appendChild(document.createTextNode(firstName + " " + lastName))
    tagPTime.appendChild(document.createTextNode("last seen recently"))

    tagDiv.appendChild(tagPName)
    tagDiv.appendChild(tagPTime)

    li.appendChild(tagImg)
    li.appendChild(tagDiv)
    if (firstName.length > 0 && inpNum.length > 14) {
        ul.appendChild(li)
    } else {
        li.style.display = "none"
    }

    console.log(inpNum.length)

    if (firstName.length == 0 && inpNum.length < 14){
        document.getElementById("red2").style.background = "red"
        document.getElementById("red3").style.color = "red"
        document.getElementById("red").style.color = "red";
        document.getElementById("red1").style.background = "red";
        document.getElementById("cont").style.display = "none";
        document.getElementById("addBox").style.display = "block";
    } else {
        document.getElementById("red2").style.background = "var(--second))"
        document.getElementById("red3").style.color = "var(--second)"
        document.getElementById("inpNum").style.color = "var(--black)"
        document.getElementById("red").style.color = "var(--second)";
        document.getElementById("cont").style.display = "block";
        document.getElementById("addBox").style.display = "none";
    }

    // if (inpNum.length < 14){
    //     document.getElementById("red2").style.background = "red"
    //     document.getElementById("red3").style.color = "red"
    //     document.getElementById("red").style.color = "red";
    //     document.getElementById("red1").style.background = "red";
    //     document.getElementById("cont").style.display = "none";
    //     document.getElementById("addBox").style.display = "block";
    // } else {
    //     document.getElementById("red2").style.background = "var(--second))"
    //     document.getElementById("red3").style.color = "var(--second)"
    //     document.getElementById("inpNum").style.color = "var(--black)"
    //     document.getElementById("red").style.color = "var(--second)";
    //     document.getElementById("cont").style.display = "block";
    //     document.getElementById("addBox").style.display = "none";
    // }
}