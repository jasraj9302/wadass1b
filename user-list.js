$(document).ready(function() {
  // Retrieve user data from local storage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Display user data in the list
  var userList = $("#userList");
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var listItem = $("<li>").text("Name: " + user.name + " | Email: " + user.email);
    userList.append(listItem);
  }
});
