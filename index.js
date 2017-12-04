function displayName(){
  var name = prompt("What is your name?");
  var value = document.getElementById("name");
  value.innerHTML = name;
  
}

function helloWorld(){
  console.log("Hello World")
}

displayName()

helloWorld()