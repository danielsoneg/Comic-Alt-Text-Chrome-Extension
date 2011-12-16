var drMcNinja = function(){
    var comic = document.getElementById('comic');
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(comic.children[0].title));
    comic.appendChild(p);
};
drMcNinja();