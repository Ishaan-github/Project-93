function addUser() {
  var username = document.getElementById("usernameInput");
  var password = document.getElementById("passwordInput");

  localStorage.setItem("Username", username);
  window.location = "Kwitter-Room.html";
}