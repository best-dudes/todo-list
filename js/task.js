
function myFunction() {
  var text = document.getElementById('text').value;
  var para = document.createElement("P");
  var t = document.createTextNode(text);
  para.appendChild(t);
  document.getElementById("tag").appendChild(para);
}
