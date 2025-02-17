var userdata = JSON.parse(window.localStorage.getItem('userdata') || '[]');

function signup() {
  var fullName = document.getElementById('userName').value;
  var email = document.getElementById('userEmail').value;
  var city = document.getElementById('userCity').value;
  var phone = document.getElementById('userPhone').value;
  var password = document.getElementById('userPassword').value;
  
  if ( email === "admin@gmail.com")  {
    alert("Gmail Already Exists!");
    
  }
  else{
  if (fullName === "" || email === "" || city === "" || phone === "" || password === "") {
    alert("Please Insert Values in all fields!");
  } else {
    var emailExist = false;
    for (var j = 0; j < userdata.length; j++) {
      if ( email === userdata[j].email)  {
        alert("Gmail Already Exists!");
        emailExist = true;
        break;
      }
    }
    if (!emailExist) {
      var user = {
        fullName: fullName,
        email: email,
        city: city,
        phone: phone,
        password: password
      };
      userdata.push(user);
      window.localStorage.setItem("userdata", JSON.stringify(userdata));
      alert("Signup Successful!");
      window.location.href = "login.html";
    }
  }
}
}

function logIn() {
    var lEmail = document.getElementById('lemail').value;
    var lPassword = document.getElementById('lpassword').value;
    var getData = window.localStorage.getItem("userdata");
    var getParseData = JSON.parse(getData);
    var login = false;
  
    if(lEmail === "admin@gmail.com" && lPassword === "123456"){
      var user = {
        fullName: 'admin',
        email: 'admin@gmail.com',
        city: 'Karachi',
        phone: '123456789',
        password: '123456'
      };
      userdata.push(user);
      window.localStorage.setItem("userdata", JSON.stringify(userdata));
      window.location.href="dashboard.html"
    } else{
      for (var k = 0;k < getParseData.length; k++) {
        console.log(k)
        if (lEmail === getParseData[k].email && getParseData[k].password === lPassword) {
          login = true;
          window.localStorage.setItem("currentUser", JSON.stringify(getParseData[k]));
          window.location.href = "main.html"
          break;
        }
      }
      if (login === true) {
        console.log("Login successful");
      } else {
        alert("Invalid Email Password");
      }
    }
  }
  