// const email = emailCheck.value
// const password = pwCheck.value
localStorage.removeItem('loginUser')
let storeData = localStorage.getItem('userInfos')
let userDate = JSON.parse(storeData)
// console.log(userDate[0].email)
// console.log(userDate[0].password)
//
//
//
// for (let i = 0; i < userDate.length; i++) {
//   if (userDate[i].email == emailCheck.value) {
//     if (userDate[i].password == pwCheck.value) {
//       // 둘 다 localStorage 에 값이 있으면서 같은 json? 안에 있음
//       console.log("대충 아이디 비번 다 맞다는 말")
//     }
//   }
// }

function checkValue() {
  let emailCheck = document.querySelector("#email").value
  let pwCheck = document.querySelector("#password").value
  for (let i = 0; i < userDate.length; i++) {
    if (userDate[i].email == emailCheck) {
      if (userDate[i].password == pwCheck) {
        // 둘 다 localStorage 에 값이 있으면서 같은 json? 안에 있음
        console.log("대충 아이디 비번 다 맞다는 말")
        location.href='welcome.html'

        localStorage.removeItem('loginUser')
        const loginUser = {
          email: userDate[i].email,
          password: userDate[i].password,
          username: userDate[i].username
        }
        localStorage.setItem('loginUser', JSON.stringify(loginUser));
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.")
      }
    }
  }


  // if (localStorage.getItem('email') == email) {
  //   console.log("이메일 확인 완료")
  // }
  // if (localStorage.getItem('password') == password) {
  //   console.log("비밀번호 확인 완료")
  // }

}

