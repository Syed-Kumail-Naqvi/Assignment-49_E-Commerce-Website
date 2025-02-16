var table = document.getElementById('Table');
var table2 = document.getElementById('table');
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);

console.log(getParseData)
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
    function deleteUser(e){

var cheak = e.parentNode.parentNode.childNodes[7].textContent
console.log(cheak)

  for (var a = 0; a < getParseData.length; a++) {
    if (cheak == getParseData[a].email) {

getParseData.splice(a, 1)
localStorage.setItem("userdata", JSON.stringify(getParseData));
    }
  }
  e.parentNode.parentNode.remove()

}

function toggle() {
      var toggle = document.getElementById('sidebar');
      if (toggle.style.display == "none") {
        toggle.style.display = "block"
      } else {
        toggle.style.display = "none"
      }
    }

// Showing Order Table
function orders(params) {

    var orderData = window.localStorage.getItem("PrintOrder")
    console.log(orderData)
    var getParseData2 = JSON.parse(orderData)
    console.log(getParseData2);

    for (var i = 0; i < getParseData2.length; i++){
    table2.innerHTML += `
        <tr>
          <td><img src = ${getParseData2[i].image} width= "90"></img></td>
          <td>${getParseData2[i].Name}</td>
          <td>${getParseData2[i].price}</td>
          <td>01</td>
          <td>${getParseData2[i].price}</td>
          
          <td><button onclick="deleteUser(this)">Delete</button></td>

        </tr>       
    `
}
}