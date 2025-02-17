
// var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
// console.log(currentUser);

// var getData = window.localStorage.getItem("userdata");
// console.log(getData);

// var getParseData = JSON.parse(getData);
// console.log(getParseData);

// var heading = document.getElementById('UserName');

// var getOrder = JSON.parse(window.localStorage.getItem("PrintOrder"))

// console.log(getOrder)
// // window.location='checkout.html'

// var cardArea = document.getElementById("cardarea");

// for (var x = 0; x < getParseData.length; x++) {
//   if (getOrder.length == 0) {
//     cardArea.innerHTML = `<h2>Empty</h2>`
//     document.getElementById("order").style.display = "none"
//   }
// }

// for (var j = 0; j < getOrder.length; j++) {
//   cardArea.innerHTML += `
//       <tr>
//           <td class="product-thumbnail">
//             <img src="${getOrder[j].image}" alt="Image" class="img-fluid">
//           </td>
//                           <td class="product-name">
//                             <h2 class="h5 text-black">Product ${getOrder[j].Name}</h2>
//                           </td>
//                           <td>$${getOrder[j].price}</td>
//                           <td>
//                             <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
//                               <div class="input-group-prepend">
//                                 <button class="btn btn-outline-black decrease" type="button">&minus;</button>
//                               </div>
//                               <input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
//                               <div class="input-group-append">
//                                 <button class="btn btn-outline-black increase" type="button">&plus;</button>
//                               </div>
//                             </div>
        
//                           </td>
//                           <td>$${getOrder[j].price}</td>
//                           <td><a href="#" class="btn btn-black btn-sm" onclick='deleted(this)'>X</a></td>
//                         </tr>
//     `;
// }

// function order() {
//   for (var p = 0; p < getParseData.length; p++) {
//     if (currentUser.email == getParseData[p].email) {
//       if (!getParseData[p].id) {
//         getParseData[p].id = [];
//         console.log(getParseData);

//       }
//       console.log("hellos")
//       for (var l = 0; l < getOrder.length; l++) {
//         getParseData[p].id.push(getOrder[l]);
//         console.log(getOrder[l])
//       }
//       getOrder.splice(0)
//       console.log("hello")
//       window.localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
//       console.log(getOrder);
      
//       window.localStorage.setItem("userdata", JSON.stringify(getParseData));
//       alert("Order Submitted ✅");

//       window.location.href = "main.html"

//       cardArea.innerHTML = `
//           <h2>Empty</h2>
//       `
//       document.getElementById("order").style.display = "none"
//     }
    
//   }
   
// }

// function deleted(e) {
//   var check = e.parentNode.parentNode.remove();
//   console.log(check);
//   getOrder.splice(e, 1)
//   localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
//   console.log(getOrder);
// }

// Retrieve user and order data from localStorage
var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var getParseData = JSON.parse(window.localStorage.getItem("userdata") || "[]");
var getOrder = JSON.parse(window.localStorage.getItem("PrintOrder") || "[]");

console.log("Current User:", currentUser);
console.log("Stored Users:", getParseData);
console.log("Current Orders:", getOrder);


// Get elements
var cardArea = document.getElementById("cardarea");
var orderSection = document.getElementById("order");
var totalAmountElement = document.getElementById("totalAmount");

// Handle empty order case
if (!getOrder || getOrder.length === 0) {
  cardArea.innerHTML = `<h2>There is no Product to Checkout! Please Add Products to Your Cart</h2>`;
  if (orderSection) orderSection.style.display = "none";
} else {
  renderOrders();
}

// Function to render order items & calculate total cost
function renderOrders() {
  let content = "";
  let totalAmount = 0;

  getOrder.forEach((item, index) => {
    totalAmount += parseFloat(item.price); // Calculate total cost

    content += `
      <tr>
        <td class="product-thumbnail">
          <img src="${item.image}" alt="Image" class="img-fluid">
        </td>
        <td class="product-name">
          <h2 class="h5 text-black">Product ${item.Name}</h2>
        </td>
        <td>$${item.price}</td>
        <td>
          <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
            <div class="input-group-prepend">
              <button class="btn btn-outline-black decrease" type="button" onclick="updateQuantity(${index}, -1)">&minus;</button>
            </div>
            <input type="text" class="form-control text-center quantity-amount" value="1">
            <div class="input-group-append">
              <button class="btn btn-outline-black increase" type="button" onclick="updateQuantity(${index}, 1)">&plus;</button>
            </div>
          </div>
        </td>
        <td>$${item.price}</td>
        <td><a href="#" class="btn btn-black btn-sm" onclick="deleted(${index})">X</a></td>
      </tr>
    `;
  });

  cardArea.innerHTML = content;

  // Display total amount
  if (totalAmountElement) {
    totalAmountElement.innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
  }
}

// Function to submit order
function order() {
  if (!currentUser) {
    alert("You must be logged in to place an order!");
    return;
  }

  for (let p = 0; p < getParseData.length; p++) {
    if (currentUser.email === getParseData[p].email) {
      if (!getParseData[p].orders) {
        getParseData[p].orders = [];
      }
      getParseData[p].orders.push(...getOrder);
      break;
    }
  }

  // Clear cart after order submission
  getOrder = [];
  localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
  localStorage.setItem("userdata", JSON.stringify(getParseData));

  alert("Order Placed Succesfully ✅");
  // window.location.href = "main.html";

  // Update UI
  cardArea.innerHTML = `<h2>There are no carts to add please add products</h2>`;
  if (orderSection) orderSection.style.display = "none";
  if (totalAmountElement) totalAmountElement.innerText = "Total Amount: $0.00";

  // Redirect users based on their role
if (currentUser) {
  if (currentUser.email === "admin@gmail.com") {
    window.location.href = "dashboard.html"; // Redirect admin to Dashboard
  } else {
    window.location.href = "thankyou.html"; // Redirect regular users to Main Page
  }
}
}

// Function to delete an order item
function deleted(index) {
  getOrder.splice(index, 1);
  localStorage.setItem("PrintOrder", JSON.stringify(getOrder));

  if (getOrder.length === 0) {
    cardArea.innerHTML = `<h2>Empty</h2>`;
    if (orderSection) orderSection.style.display = "none";
    if (totalAmountElement) totalAmountElement.innerText = "Total Amount: $0.00";
  } else {
    renderOrders();
  }
}

// Function to update quantity (Placeholder function, needs proper logic)
function updateQuantity(index, change) {
  alert(`Quantity updated for item ${index} by ${change}`);
}