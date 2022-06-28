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