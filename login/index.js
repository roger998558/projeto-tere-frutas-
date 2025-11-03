function validacao() {
    const emilValid = isEmailValid ();
     document.getElementById('recover-password-button').disabled = !emilValid;

   function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return true; 
    }
    return validatemail(email);
   }
   function validatemail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}
}