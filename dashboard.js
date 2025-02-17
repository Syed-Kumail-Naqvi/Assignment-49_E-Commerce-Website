// var table = document.getElementById('Table');
// var table2 = document.getElementById('table');
// var getData = window.localStorage.getItem("userdata");
// var getParseData = JSON.parse(getData);

// console.log(getParseData)
// for (var i = 0; i < getParseData.length; i++) {
//     table.innerHTML += `
//         <tr>
//           <td>${getParseData[i].fullName}</td>
//           <td>${getParseData[i].city}</td>
//           <td>${getParseData[i].phone}</td>
//           <td>${getParseData[i].email}</td>
//           <td>${getParseData[i].password}</td>
          
//           <td><button onclick="deleteUser(this)">Delete</button></td>
//         </tr>
//       `;
//     }
//     function deleteUser(e){

// var cheak = e.parentNode.parentNode.childNodes[7].textContent
// console.log(cheak)

//   for (var a = 0; a < getParseData.length; a++) {
//     if (cheak == getParseData[a].email) {

// getParseData.splice(a, 1)
// localStorage.setItem("userdata", JSON.stringify(getParseData));
//     }
//   }
//   e.parentNode.parentNode.remove()

// }

// function toggle() {
//       var toggle = document.getElementById('sidebar');
//       if (toggle.style.display == "none") {
//         toggle.style.display = "block"
//       } else {
//         toggle.style.display = "none"
//       }
//     }

// // Showing Order Table
// function orders(params) {

//     var orderData = window.localStorage.getItem("PrintOrder")
//     console.log(orderData)
//     var getParseData2 = JSON.parse(orderData)
//     console.log(getParseData2);

//     for (var i = 0; i < getParseData2.length; i++){
//     table2.innerHTML += `
//         <tr>
//           <td><img src = ${getParseData2[i].image} width= "90"></img></td>
//           <td>${getParseData2[i].Name}</td>
//           <td>${getParseData2[i].price}</td>
//           <td>01</td>
//           <td>${getParseData2[i].price}</td>
          
//           <td><button onclick="deleteUser(this)">Delete</button></td>

//         </tr>       
//     `
// }
// }

var table = document.getElementById('Table');
var table2 = document.getElementById('table');
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);
var currentUser = JSON.parse(localStorage.getItem("currentUser")); // Get logged-in user

console.log(getParseData);

// Display Users Table
for (var i = 0; i < getParseData.length; i++) {
    table.innerHTML += `
        <tr>
          <td>${getParseData[i].fullName}</td>
          <td>${getParseData[i].city}</td>
          <td>${getParseData[i].phone}</td>
          <td>${getParseData[i].email}</td>
          <td>${getParseData[i].password}</td>
          <td><button onclick="deleteUser(this)">Delete</button></td>
        </tr>
      `;
}

// Function to delete user
function deleteUser(e) {
    var emailToDelete = e.parentNode.parentNode.childNodes[7].textContent;
    console.log(emailToDelete);

    for (var a = 0; a < getParseData.length; a++) {
        if (emailToDelete == getParseData[a].email) {
            getParseData.splice(a, 1);
            localStorage.setItem("userdata", JSON.stringify(getParseData));
            break;
        }
    }
    e.parentNode.parentNode.remove();
}

// Sidebar Toggle
function toggle() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
}

// Function to Display Orders in Dashboard
function orders() {
    var getData = localStorage.getItem("userdata");
    var getParseData = JSON.parse(getData);
    
    var userOrders = [];
    for (var i = 0; i < getParseData.length; i++) {
        if (getParseData[i].email === currentUser.email) {
            userOrders = getParseData[i].orders || []; 
            break;
        }
    }

    console.log("User Orders:", userOrders);
    table2.innerHTML = ""; // Clear previous entries

    for (var i = 0; i < userOrders.length; i++) {
        table2.innerHTML += `
            <tr>
                <td><img src="${userOrders[i].image}" width="90"></td>
                <td>${userOrders[i].Name}</td>
                <td>$${userOrders[i].price}</td>
                <td>1</td>
                <td>$${userOrders[i].price}</td>
                <td><button onclick="deleteOrder(${i})">Delete</button></td>
            </tr>
        `;
    }
}

// Function to Delete an Order
function deleteOrder(index) {
    var getData = localStorage.getItem("userdata");
    var getParseData = JSON.parse(getData);

    for (var i = 0; i < getParseData.length; i++) {
        if (getParseData[i].email === currentUser.email) {
            getParseData[i].orders.splice(index, 1);  
            localStorage.setItem("userdata", JSON.stringify(getParseData));
            break;
        }
    }

    orders(); // Refresh the order table after deletion
}

// Load orders when page opens
window.onload = function () {
    orders();
};