function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
return document.getElementById('nested').querySelector('.target');
}


var deepestLevel = 0;
var deepestLevelText = "";

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  if(!nodes.length) 
  return false;
  return nodes[nodes.length-1];
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
}
