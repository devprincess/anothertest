
const password = document.getElementById('password');
const username = document.getElementById("username");
const toggle = document.getElementById('passwordeye');
const form = document.getElementById('form');

  toggle.addEventListener('click', function() {
    if (password.type === 'password') {
      password.type = 'text';
      toggle.classList.remove('fa-eye');
      toggle.classList.add('fa-eye-slash');
    } else {
      password.type = 'password';
      toggle.classList.remove('fa-eye-slash');
      toggle.classList.add('fa-eye');
    }
  });
   

  form.addEventListener('submit', function(event){
    event.preventDefault();

    if (username.value === '') {
        alert('Please enter your username.');
        username.focus();
        return false;
      }
  
      if (password.value === '') {
        alert('Please enter your password.');
        password.focus();
        return false;
      }
      
      if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        password.focus();
        return false;
      }

      alert("Form submitted successfully! you're logged in " + username.value + ".");
      console.log("Username: "+ username.value);
      console.log("Password: "+ password.value);
      form.reset();
      return true;
  });



  
  