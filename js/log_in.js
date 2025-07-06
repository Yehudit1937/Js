
const userName = document.getElementById("userName")
const password = document.getElementById("password")
const checkPassword = document.getElementById("checkPassword")
const logIn = document.getElementById("logIn")

let users = JSON.parse(localStorage.getItem("users"))

userName.addEventListener("change", () => {

 if(users.find(i => i.Name === userName.value))
   {
        alert("יש לנו כזה חבר בחר בשם אחר😕");
        userName.value = "";
    }
    
})
//אימות סיסמא
checkPassword.addEventListener("change", () => {
    if (checkPassword.value !== password.value) {
        checkPassword.value = "";
        alert("הסיסמא לא תואמת😕");
    }
})
//localStorageהתחברות ושמירה ב
if (!users)
    users = []
logIn.addEventListener("click", () => {
    const user = {
        "Name": userName.value,
        "password": password.value,
        "highScorse":0
    }
    users.push(user)
    // localStorage.setItem("users", JSON.stringify(users))
    if(checkPassword.value!=""&&password.value!=""&&userName.value!=""){
        localStorage.setItem("users", JSON.stringify(users))
        const curentUser ={ "Name": userName.value,"win":0, "highScorse": 0 };
        localStorage.setItem("curentUser", JSON.stringify(curentUser))
        window.open("loby.html")
        }
})
