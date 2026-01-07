//presentation logic ,request data gathering logic,
function validate() {
  //request data gathering logic
  let user_name = document.getElementById("username").value;
  let password = document.getElementById("pass").value;
  let regex = /[a-z][A-Z][0-9]/; //regular expression
  //validation logic

  if (user_name == "") {
    alert("please enter the username");
    return false;
  }
  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 && password.length > 12) {
    alert("paswword should be gretaer than 8 and less than 12");
    return false;
  }
  if (!regex.test(password)) {
    alert(
      "password should be combination of small,capital letters and numbers"
    );
    return false;
  }
  return true;
}
