var xkcd = function() {
  var d = document.getElementsByClassName('s')[2];
  var i = d.getElementsByTagName('img')[0];
  var p = document.createElement('p');
  p.appendChild(document.createTextNode(i.title));
  d.appendChild(p);
};
xkcd();