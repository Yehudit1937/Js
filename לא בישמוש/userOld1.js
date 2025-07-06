const fname = document.getElementById("fname")
const password2 = document.getElementById("password2")
const send1 = document.getElementById("send1")
//בתחילה אים תופס כניסה
//localStorageבודק האם השם וסיסמא שהכניס תואמים למה שנרשם לפי ה

//בודק בהכנסת השם האם המשתמש קיים
fname.addEventListener("change", () => {
    let userold = JSON.parse(localStorage.getItem("users"))
    if(!userold||!userold.find(i => i.Name === fname.value))
    {
        alert(" לא מצאנו אותך בא תצטרף עלינו")
        closePopup()
        popup1()
    }
   })
//בודק האם הסיסמא נכונה למשתמש
   send1.addEventListener("click", () => {
    if (check()) {
            //שמירה על כל משתמש שנכנס את שמו ואת נצחנותו
            const curentUser ={ "Name": fname.value,"win":0, "highScorse": 0 };
            localStorage.setItem("curentUser", JSON.stringify(curentUser))
            // window.open("game.html")
         closePopup()

    }
    else {
        fname.value = fname.value
        password2.value = ""
        alert(" הסיסמא לא נכונה")
       
    }
    
})
const check = () => {
    let userold1 = JSON.parse(localStorage.getItem("users"))
 let Name = userold1.find(i => i.Name === fname.value)
    if (Name.password == password2.value)
        return true;
    return false;
}




//  function openPopup() {
//     document.getElementById('popup1').style.display = 'flex';
//     document.getElementById('overlay1').style.display = 'block';
// }

function closePopup() {
    document.getElementById('popup1').style.display = 'none';
    document.getElementById('overlay1').style.display = 'none';
}

// window.onload = openPopup()


//הרשמה

const username = document.getElementById("username")
const password = document.getElementById("password")
const password1 = document.getElementById("password1")
const send = document.getElementById("send")

let users = JSON.parse(localStorage.getItem("users"))

username.addEventListener("change", () => {

 if(users.find(i => i.Name === username.value))
   {
        alert("יש לנו כזה חבר בחר בשם אחר😕");
        username.value = "";
    }
    
})
//אימות סיסמא
password1.addEventListener("change", () => {
    if (password1.value !== password.value) {
        password1.value = "";
        alert("הסיסמא לא תואמת😕");
    }
})
//localStorageהתחברות ושמירה ב
if (!users)
    users = []
send.addEventListener("click", () => {
    const user = {
        "Name": username.value,
        "password": password.value,
        "highScorse":0
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    if(password1.value!=""&&password.value!=""&&username.value!=""){
        const curentUser ={ "Name": username.value,"win":0, "highScorse": 0 };
        localStorage.setItem("curentUser", JSON.stringify(curentUser))
          closePopup1()
          closePopup()
        }
})


function closePopup1() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  function popup1() {
document.getElementById('popup').style.display = 'flex';
document.getElementById('overlay').style.display = 'block';
  }
//   Popup()

closePopup1()
