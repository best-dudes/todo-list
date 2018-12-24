function myFunction() {
  var text = document.getElementById('text').value;
  var paragraf = document.createElement("p");
  var t = document.createTextNode(text);
  paragraf.appendChild(t);
  document.getElementById("wrapper").appendChild(paragraf);
}

