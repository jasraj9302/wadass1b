$(document).ready(function() {
  // Event listener for form submission
  $("#registrationForm").submit(function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form values
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();

    // Create user object
    var user = {
      name: name,
      email: email,
      password: password
    };

    // Send user data to server using AJAX POST method
    $.ajax({
      url: "localhost:8443", // Replace with your server endpoint URL
      type: "POST",
      data: user,
      success: function(response) {
        // Store user data in array or local storage
        var users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to new page that displays user list
        window.location.href = "user-list.html"; // Replace with your user list page URL
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});
