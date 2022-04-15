var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function checkvalidD(){

  var x = document.getElementById("name").value;
  var y = document.getElementById("number").value;
  var z = document.getElementById("date").value;
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  var test1=usernameRegex.test(x);
  if(test1)
     alert("Congrts. U have registerd successfully")  
  else
  {
    alert(test1)
  }
  
}