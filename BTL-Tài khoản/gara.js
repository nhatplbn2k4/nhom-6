
function singup(e){
const inputUsernameRegisterr = document.getElementById("ten");
const inputUsernameRegister = document.getElementById("fname");
const inputPasswordRegister = document.getElementById("lname");
const btnRegister = document.getElementById("dnhap");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegisterr.value === "" ||
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      ten: inputUsernameRegisterr.value,
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem('name', json);
    alert("Đăng Ký Thành Công");
    window.location.href = "1.html";
  }
});
}


// validation form login
function login(e){
  const usernamee = document.getElementById("fname").value;
  const passworde = document.getElementById("lname").value;
  const btnLogin = document.getElementById("dnhap");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (usernamee.value === "" || passworde.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem('name'));
    if (
      user.username === usernamee.value &&
      user.password === passworde.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "gara.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
}