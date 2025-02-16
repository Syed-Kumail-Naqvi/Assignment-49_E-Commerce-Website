
var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
console.log(currentUser);

var getData = window.localStorage.getItem("userdata");
console.log(getData);

var getParseData = JSON.parse(getData);
console.log(getParseData);

var heading = document.getElementById('UserName');

var getOrder = JSON.parse(window.localStorage.getItem("PrintOrder"))

console.log(getOrder)
// window.location='checkout.html'

var cardArea = document.getElementById("cardarea");

for (var x = 0; x < getParseData.length; x++) {
  if (getOrder.length == 0) {
    cardArea.innerHTML = `<h2>Empty</h2>`
    document.getElementById("order").style.display = "none"
  }
}

for (var j = 0; j < getOrder.length; j++) {
  cardArea.innerHTML += `
      <tr>
          <td class="product-thumbnail">
            <img src="${getOrder[j].image}" alt="Image" class="img-fluid">
          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black">Product ${getOrder[j].Name}</h2>
                          </td>
                          <td>$${getOrder[j].price}</td>
                          <td>
                            <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                              <div class="input-group-prepend">
                                <button class="btn btn-outline-black decrease" type="button">&minus;</button>
                              </div>
                              <input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                              <div class="input-group-append">
                                <button class="btn btn-outline-black increase" type="button">&plus;</button>
                              </div>
                            </div>
        
                          </td>
                          <td>$${getOrder[j].price}</td>
                          <td><a href="#" class="btn btn-black btn-sm" onclick='deleted(this)'>X</a></td>
                        </tr>
    `;
}

function order() {
  for (var p = 0; p < getParseData.length; p++) {
    if (currentUser.email == getParseData[p].email) {
      if (!getParseData[p].id) {
        getParseData[p].id = [];
        console.log(getParseData);

      }
      console.log("hellos")
      for (var l = 0; l < getOrder.length; l++) {
        getParseData[p].id.push(getOrder[l]);
        console.log(getOrder[l])
      }
      // getOrder.splice(0)
      console.log("hello")
      window.localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
      console.log(getOrder);
      
      window.localStorage.setItem("userdata", JSON.stringify(getParseData));
      alert("Order Submitted ✅");

      window.location.href = "main.html"
    }
    
  }
   
}

function deleted(e) {
  var check = e.parentNode.parentNode.remove();
  console.log(check);
  getOrder.splice(e, 1)
  localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
  console.log(getOrder);
}