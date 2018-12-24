function onClick() {
  var text = document.getElementById('text').value;
  var paragraph = document.createElement('p');
  var t = document.createTextNode(text);
  paragraph.appendChild(t);
  document.getElementById('wrapper').appendChild(paragraph);
}

