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

  var captcha=document.getElementById("captcha").value;

  var test1=usernameRegex.test(x);
  if(test1 && captcha==30)
     document.writeln("Congrats, Account Creation Successful");
  else
  {
    document.writeln("Check your credentials again and retry");
  }   
}

function testers($scope){
  $scope.first=Math.floor(Math.random() * 10);
  $scope.second=Math.floor(Math.random() * 10);
}

