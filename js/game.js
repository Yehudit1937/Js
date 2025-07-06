//אוביקטים
const green = document.getElementById("green")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")
const play = document.getElementById("play")

//משתנים
let oldColor
let count
let mone
let quicly
let click
// let win
let second
let err = false

//localStorageקבלת  ניצחונות קודמים ב 
const curentUser = JSON.parse(localStorage.getItem("curentUser"))
let { Name, win, highScorse } = curentUser;

//תחילת המשחק שולח להגרלות
const start = () => {
  oldColor = []
  count = 0
  mone = 0;
  quicly = 1
  second = 4
  win = 0
  random()
}

play.addEventListener("click", () => {
  start()
})




//מגריל מספרים מ1- 4 ולפי זה זה מראה את הצבע שאותו שולח להבהב
const random = () => {
  let c1 = 0
  color = Math.floor((Math.random() * 4) + 1)
  switch (color) {
    case 1:
      c1 = green
      oldColor.push(c1)
      break;
    case 2:
      c1 = red
      oldColor.push(c1)
      break;
    case 3:
      c1 = yellow
      oldColor.push(c1)
      break;
    case 4:
      c1 = blue
      oldColor.push(c1)
      break;
  }

  mone = 0
  if (count == 0)
    chengCOlor(c1, 0);
  //חוזר עך כל הבהובים הקודמים ומהבהב גם אותם
  else {
    for (let i = 0; i < oldColor.length; i++) {
      chengCOlor(oldColor[i], i)
      console.log(oldColor[i]);
      // second += 3
    }
  }

  quicly += 2
  count++
  click = false;
  second += (oldColor.length * 2)
  win++
  // end()
  // timer()


}

//מהבב את הצבע הנשלח
const chengCOlor = (c1, i) => {
  let opacity = c1.style.opacity

  setTimeout(() => {
    c1.style.opacity = ("20%")
  }, 1000 * (i + 1 / quicly))

  setTimeout(() => {
    c1.style.opacity = opacity
  }, 1000 * (i + 2 / quicly))

}

// בודק האם המשמש לחץ תשובה  תוך זמן קצוב 
// const timer = () => {
const timer1 = setInterval(() => {
  if (second === 0) {
    if (mone<count) {
      err = true
      end()
      clearInterval(timer1);
    }
  }
  else
    second--
}, 1000)
// }



// בודק כל פעם האם מה שלח תואם להבהוב 
green.addEventListener("click", () => {
  click = true
  if (oldColor[mone] == green) {
    const audio = new Audio("../img & audio/1.mp3")
    audio.play();
    check()
  }
  else {
    err = true
    end()

  }

})
red.addEventListener("click", () => {
  click = true
  if (oldColor[mone] == red) {
    const audio = new Audio("../img & audio/1.mp3")
    audio.play();
    check()
  }

  else {
    err = true
    end()

  }

})
yellow.addEventListener("click", () => {
  click = true
  if (oldColor[mone] == yellow) {
    const audio = new Audio("../img & audio/1.mp3")
    audio.play();
    check()
  }
  else {
    err = true
    end()
  }


})
blue.addEventListener("click", () => {
  click = true
  if (oldColor[mone] == blue) {
    const audio = new Audio("../img & audio/1.mp3")
    audio.play();
    check()
  }
  else {
    err = true
    end()
  }


})
const check = () => {

  if (mone == count - 1) {
    // click=true;
    if (count == 5)
      end()
    else
      random();

  }
  else
    mone++

}

//ניצחון או כישלון
const wins = document.getElementById("wins")
const In = document.getElementById("In")
const highScorsee = document.getElementById("highScorsee")
const Name1 = document.getElementById("name")
const newGame = document.getElementById("tryAgain")
const nextSlav = document.getElementById("nextSlav")
const tital = document.getElementById("tital")

//שבתחילת המשחק לא יראו את הניצחונות
function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('zikok').style.display = 'none';

}
const end = () => {
  //בודק האם סים שלב או נכשל
  if (count == 5 || err == true) {
    if (err == true)
      win -= 1;
    //האם הניצחון שלו יוותר גדול מהשיא
    if (win > highScorse)
      highScorse = win
    let users = JSON.parse(localStorage.getItem("users"))
    users.forEach(i => {
      if (i.Name == Name)
        i.highScorse = highScorse
    });
    curentUser1 = { "Name": Name, "win": win, "highScorse": highScorse }
    localStorage.setItem("curentUser", JSON.stringify(curentUser1))
    localStorage.setItem("users", JSON.stringify(users))
    endGame()
  }
}
//הצגה הניצחונות על המסך
const endGame = () => {
  if (err == true) {
    tital.textContent = "נכשלת, לא נורא נסה פעם נוספת"
    nextSlav.style.display = 'none';
  }
  else {
    tital.textContent = "wow!!!! ניצחת!! עלה שלב"
    tryAgain.style.display = 'none';
  }
  Name1.textContent = Name
  wins.textContent = win
  In.textContent = 5
  highScorsee.textContent = `highScorse: ${highScorse}`;
  if (count == 5 && !err) {
    const audio = new Audio("../img & audio/win.wav")
    audio.play();
    document.getElementById('zikok').style.display = 'flex';
    document.getElementById('zikok').style.display = 'block';
  }
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('overlay').style.display = 'block';
}
tryAgain.addEventListener("click", () => {
  start()
})
nextSlav.addEventListener("click", () => {
  start()
})

closePopup()
