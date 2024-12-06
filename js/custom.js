(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()

var users = JSON.parse(window.localStorage.getItem("USERS")) || [
	{
	  userName: "Admin",
	  userEmail: "admin@gmail.com",
	  userPhone: "03123456",
	  userPassword: 123,
	  userCity: "Karachi",
	  usersAddToCarts: [],
	},
  ];
  console.log(users);
  
  // for storing add to carts products
  var addToCartArray =
	JSON.parse(window.localStorage.getItem("addToCartArray")) || [];
  console.log(addToCartArray);

  function signupDataStore() {
	// obj for users data
	let usersData = {
	  userName: document.getElementById("userName").value,
	  userEmail: document.getElementById("userEmail").value,
	  userPhone: document.getElementById("userPhone").value,
	  userPassword: document.getElementById("userPassword").value,
	  userCity: document.getElementById("userCity").value,
	  usersAddToCarts: [],
	};
}