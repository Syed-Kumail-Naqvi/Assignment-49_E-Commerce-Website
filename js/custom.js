
var Product = JSON.parse(window.localStorage.getItem('itemsData') || '[]');
var itemsData = [
    {
        id: 1,
        Name: "Nordic Chair 01",
        image: "./images/product-3.png",
        price: "50.00"
    },
    {
        id: 2,
        Name: "Nordic Chair 02",
        image: "./images/product-1.png",
        price: "50.00"
    }
    ,
    {
        id: 3,
        Name: "Kruzo Aero Chair",
        image: "./images/product-2.png",
        price: "78.00"
    }
    ,
    {
        id: 4,
        Name: "Ergonomic Chair",
        image: "./images/product-3.png",
        price: "43.00"
    }
	,
    {
        id: 5,
        Name: "Nordic Chair 01",
        image: "./images/product-3.png",
        price: "50.00"
    }
	,
    {
        id: 6,
        Name: "Nordic Chair 02",
        image: "./images/product-1.png",
        price: "50.00"
    }
    // ,
    // {
    //     id: 7,
    //     Name: "Kruzo Aero Chair",
    //     image: "./images/product-2.png",
    //     price: "78.00"
    // }
    // ,
    // {
    //     id: 8,
    //     Name: "Ergonomic Chair",
    //     image: "./images/product-3.png",
    //     price: "43.00"
    // }

]

var cardArea = document.getElementById('cardArea');

for (var i = 0 ; i < itemsData.length ; i++){
	cardArea.innerHTML += `

		<div class="col-12 col-md-4 col-lg-3 mb-5">

                        
						<a class="product-item" href="#">
                            
							<img src="${itemsData[i].image}" class="img-fluid product-thumbnail">
							<h3 class="product-title">${itemsData[i].id}</h3>
							<h3 class="product-title">${itemsData[i].Name}</h3>
							<strong class="product-price">$${itemsData[i].price}</strong> 

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid" onclick = "add(this)">
							</span>

						</a>
                        
					</div>
	`
}

var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);

var rafOrder = JSON.parse(window.localStorage.getItem('PrintOrder')) || [];

function add(e) {
	var idNode = e.parentNode.parentNode.childNodes[3].innerText;
    console.log(idNode);
    
	console.log(idNode);
	for (var a = 0; a < itemsData.length; a++) {
	  if (idNode == itemsData[a].id) {
		rafOrder.push(itemsData[a])
		window.localStorage.setItem("PrintOrder",JSON.stringify(rafOrder))
		console.log(rafOrder)
	  }
	}
	alert("Added To Your Cart! ✅")
  }

// (function() {
// 	'use strict';

// 	var tinyslider = function() {
// 		var el = document.querySelectorAll('.testimonial-slider');

// 		if (el.length > 0) {
// 			var slider = tns({
// 				container: '.testimonial-slider',
// 				items: 1,
// 				axis: "horizontal",
// 				controlsContainer: "#testimonial-nav",
// 				swipeAngle: false,
// 				speed: 700,
// 				nav: true,
// 				controls: true,
// 				autoplay: true,
// 				autoplayHoverPause: true,
// 				autoplayTimeout: 3500,
// 				autoplayButtonOutput: false
// 			});
// 		}
// 	};
// 	tinyslider();

// 	var sitePlusMinus = function() {

// 		var value,
//     		quantity = document.getElementsByClassName('quantity-container');

// 		function createBindings(quantityContainer) {
// 	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
// 	      var increase = quantityContainer.getElementsByClassName('increase')[0];
// 	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
// 	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
// 	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
// 	    }

// 	    function init() {
// 	        for (var i = 0; i < quantity.length; i++ ) {
// 						createBindings(quantity[i]);
// 	        }
// 	    };

// 	    function increaseValue(e, quantityAmount) {
// 	        value = parseInt(quantityAmount.value, 10);

// 	        console.log(quantityAmount, quantityAmount.value);

// 	        value = isNaN(value) ? 0 : value;
// 	        value++;
// 	        quantityAmount.value = value;
// 	    }

// 	    function decreaseValue(e, quantityAmount) {
// 	        value = parseInt(quantityAmount.value, 10);

// 	        value = isNaN(value) ? 0 : value;
// 	        if (value > 0) value--;

// 	        quantityAmount.value = value;
// 	    }
	    
// 	    init();
		
// 	};
// 	sitePlusMinus();


// })()

// var users = JSON.parse(window.localStorage.getItem("USERS")) || [
// 	{
// 	  userName: "Admin",
// 	  userEmail: "admin@gmail.com",
// 	  userPhone: "1234567",
// 	  userPassword: 123456,
// 	  userCity: "Karachi, Pakistan",
// 	  usersAddToCarts: [],
// 	},
//   ];
//   console.log(users);
  
//   // for storing add to carts products
//   var addToCartArray =
// 	JSON.parse(window.localStorage.getItem("addToCartArray")) || [];
//   console.log(addToCartArray);

//   function signupDataStore() {
// 	// obj for users data
// 	let usersData = {
// 	  userName: document.getElementById("userName").value,
// 	  userEmail: document.getElementById("userEmail").value,
// 	  userPhone: document.getElementById("userPhone").value,
// 	  userPassword: document.getElementById("userPassword").value,
// 	  userCity: document.getElementById("userCity").value,
// 	  usersAddToCarts: [],
// 	};
// }