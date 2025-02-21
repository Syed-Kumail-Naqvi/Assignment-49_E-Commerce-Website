// var userdata = JSON.parse(window.localStorage.getItem('userdata') || '[]');

// function signup() {
//   var fullName = document.getElementById('userName').value;
//   var email = document.getElementById('userEmail').value;
//   var city = document.getElementById('userCity').value;
//   var phone = document.getElementById('userPhone').value;
//   var password = document.getElementById('userPassword').value;
  
//   if ( email === "admin@gmail.com")  {
//     alert("Gmail Already Exists!");
    
//   }
//   else{
//   if (fullName === "" || email === "" || city === "" || phone === "" || password === "") {
//     alert("Please Insert Values in all fields!");
//   } else {
//     var emailExist = false;
//     for (var j = 0; j < userdata.length; j++) {
//       if ( email === userdata[j].email)  {
//         alert("Gmail Already Exists!");
//         emailExist = true;
//         break;
//       }
//     }
//     if (!emailExist) {
//       var user = {
//         fullName: fullName,
//         email: email,
//         city: city,
//         phone: phone,
//         password: password
//       };
//       userdata.push(user);
//       window.localStorage.setItem("userdata", JSON.stringify(userdata));
//       alert("Signup Successful!");
//       window.location.href = "login.html";
//     }
//   }
// }
// }

// function logIn() {
//     var lEmail = document.getElementById('lemail').value;
//     var lPassword = document.getElementById('lpassword').value;
//     var getData = window.localStorage.getItem("userdata");
//     var getParseData = JSON.parse(getData);
//     var login = false;
  
//     if(lEmail === "admin@gmail.com" && lPassword === "123456"){
//       var user = {
//         fullName: 'admin',
//         email: 'admin@gmail.com',
//         city: 'Karachi',
//         phone: '123456789',
//         password: '123456'
//       };
//       userdata.push(user);
//       window.localStorage.setItem("userdata", JSON.stringify(userdata));
//       window.location.href="dashboard.html"
//     } else{
//       for (var k = 0;k < getParseData.length; k++) {
//         console.log(k)
//         if (lEmail === getParseData[k].email && getParseData[k].password === lPassword) {
//           login = true;
//           window.localStorage.setItem("currentUser", JSON.stringify(getParseData[k]));
//           window.location.href = "main.html"
//           break;
//         }
//       }
//       if (login === true) {
//         console.log("Login successful");
//       } else {
//         alert("Invalid Email Password");
//       }
//     }
//   }

  // Load user data from localStorage 
  var userdata = JSON.parse(window.localStorage.getItem("userdata") || "[]");

  if (!userdata.some(user => user.email === "admin@gmail.com")) {
    var adminUser = {
        fullName: "admin",
        email: "admin@gmail.com",
        city: "Karachi",
        phone: "123456789",
        password: "123456"
    };
    userdata.push(adminUser);
    window.localStorage.setItem("userdata", JSON.stringify(userdata));
}

  // Function for input fields
  function validateInput(fullName, email, city, phone, password) {
    if (!fullName || !email || !city || !phone || !password) {
      alert("Please fill in all fields!");
      return false;
    }
  
    // Email check using regex
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format!");
      return false;
    }
  
    // Password should be at least 6 characters long
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return false;
    }
  
    // Phone number should be in numbers
    if (!/^\d+$/.test(phone)) {
      alert("Phone number should contain only digits!");
      return false;
    }
  
    return true;
  }
  
  // Signup function
  function signup() {
    var fullName = document.getElementById("userName").value.trim();
    var email = document.getElementById("userEmail").value.trim();
    var city = document.getElementById("userCity").value.trim();
    var phone = document.getElementById("userPhone").value.trim();
    var password = document.getElementById("userPassword").value.trim();
  
    // Validate user input
    if (!validateInput(fullName, email, city, phone, password)) {
      return;
    }
  
    // Prevent admin registration
    if (email.toLowerCase() === "admin@gmail.com") {
      alert("This email is reserved for admin.");
      return;
    }
  
    // Check if email already exists
    var emailExist = userdata.some((user) => user.email === email);
    if (emailExist) {
      alert("Email already exists!");
      return;
    }
  
    // Hash password manually using a basic hash function (since bcrypt requires a backend)
    function simpleHash(str) {
      return btoa(str); // Encode as Base64 (not secure, just obfuscation)
    }
  
    // Create new user object
    var user = {
      fullName: fullName,
      email: email,
      city: city,
      phone: phone,
      password: simpleHash(password), // Store hashed password
    };
  
    // Save user data
    userdata.push(user);
    window.localStorage.setItem("userdata", JSON.stringify(userdata));
  
    alert("Signup Successful!");
    window.location.href = "login.html";
  }
  
  // Login function
  function logIn() {
    var lEmail = document.getElementById("lemail").value.trim();
    var lPassword = document.getElementById("lpassword").value.trim();
  
    // Get stored user data
    var storedData = JSON.parse(window.localStorage.getItem("userdata") || "[]");
     

    // Check for admin login
    if (lEmail === "admin@gmail.com" && lPassword === "123456") {
      var user = {
        fullName : 'admin',
        email : lEmail,
        city : 'Karachi',
        phone : '03345425439',
        password : lPassword
      }
      userdata.push(user);   
      window.localStorage.setItem("userdata", JSON.stringify(userdata));
      localStorage.setItem("currentUser", JSON.stringify(user));
      // window.localStorage.setItem("userdata", JSON.stringify(user));
      alert("Welcome, Admin!");
      window.location.href = "dashboard.html";
      return;
    }
  
    // Hash input password to match stored hashed password
    function simpleHash(str) {
      return btoa(str);
    }
  
    // Find user by email
    var user = storedData.find((user) => user.email === lEmail);
    if (!user || user.password !== simpleHash(lPassword)) {
      alert("Invalid Email or Password!");
      return;
    }
  
    // Store logged-in user in localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));
  
    alert("Login successful!");
    window.location.href = "main.html";
  }