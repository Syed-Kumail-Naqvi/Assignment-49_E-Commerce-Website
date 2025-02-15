
var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);
var heading = document.getElementById('UserName');

var getOrder = JSON.parse(window.localStorage.getItem("PrintOrder"))

console.log(getOrder)
// window.location='checkout.html'

var cardArea = document.getElementById("cardarea");

// for(var x = 0; x <getParseData.length; x++){
//     if (getOrder.length == 0){
//    cardArea.innerHTML = `<h2>Empty<h2>`
//    document.getElementById("order").style.display="none"
//      }
//    }


function order() {
    for (var p = 0; p < getParseData.length; p++) {
      if (currentUser.email == getParseData[p].email) {
        if (!getParseData[p].CardId) {
          getParseData[p].CardId = [];
        }
        console.log("hellos")
        for (var l = 0; l < getOrder.length; l++) {
          getParseData[p].CardId.push(getOrder[l]);
          console.log(getOrder[l])
        }
        getOrder.splice(0)
        console.log("hello")
        window.localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
        window.localStorage.setItem("userdata", JSON.stringify(getParseData));
        alert("Order Submitted ✅")
      }
    }
   window.location.href = "checkout.html"
  }