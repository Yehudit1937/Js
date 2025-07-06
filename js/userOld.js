const userName = document.getElementById("userName")
const password = document.getElementById("password")
const logIn = document.getElementById("logIn")
//בתחילה אים תופס כניסה
//localStorageבודק האם השם וסיסמא שהכניס תואמים למה שנרשם לפי ה

//בודק בהכנסת השם האם המשתמש קיים
userName.addEventListener("change", () => {
    let userold = JSON.parse(localStorage.getItem("users"))
    if(!userold||!userold.find(i => i.Name === userName.value))
    {
        alert(" לא מצאנו אותך בא תצטרף עלינו")
        window.open("signup.html")
    }
   })
//בודק האם הסיסמא נכונה למשתמש
   logIn.addEventListener("click", () => {
    if (check()) {
        let userold1 = JSON.parse(localStorage.getItem("users"))
        let Name = userold1.find(i => i.Name === userName.value)
        const highScorse=Name.highScorse
            //שמירה על כל משתמש שנכנס את שמו ואת נצחנותו
            const curentUser ={ "Name": userName.value,"win":0, "highScorse": highScorse };
            localStorage.setItem("curentUser", JSON.stringify(curentUser))
           window.open("loby.html")
   

    }
    else {
        userName.value = userName.value
        password.value = ""
        alert(" הסיסמא לא נכונה")
       
    }
    
})
const check = () => {
    let userold1 = JSON.parse(localStorage.getItem("users"))
 let Name = userold1.find(i => i.Name === userName.value)
    if (Name.password == password.value)
        return true;
    return false;
}