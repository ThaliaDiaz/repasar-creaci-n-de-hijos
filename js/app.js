/* Seis formas de acceder al mismo elemento */ 

/* var ul = document.getElementsByTagName('ul')[0];*/
/* var ul = document.querySelectorAll('ul')[0];*/
/* var ul = document.querySelector('ul');*/
/* var ul = document.getElementById('ul-id');*/
/* var ul = document.getElementsByClassName('ul-class')[0];*/

/*
var ul = document.getElementsByName('ul-name')[0];

for( var i=0; i<ul.children.length; i++){
    console.log(ul.children[i].textContent);
}

/* para agregar un elemento

/*Encontrar al padre
var padre = ul.firstElementChild.parentElement;

/*crear un nodo hijo
var hijo = document.createElement('li');

/*crear el texto del elemento hijo
hijo.textContent ='item nuevo';

/*agregando un hijo en la posicion que yo desee
var hermano = padre.firstChild;

/*agregandno el hijo al padre 
padre.appendChild(hijo); 

/*agregando el hijo a una posición que yo elija
padre.insertBefore(hijo,hermano);  */

/** agrgando un elemento antes del item 3 */

var padre = document.querySelector('ul');
var hijo = document.createElement('li');
hijo.textContent = 'item nuevo';
var hermano = padre.firstElementChild.nextElementSibling.nextElementSibling;

padre.appendChild(hijo);
padre.insertBefore(hijo, hermano);

/* otra forma de agregar un elemento antes del item 3
var padre = document.querySelector('ul');
 
 var hijo = document.createElement('li');
 hijo.textContent ='nuevo item';
 
 var hermano =padre.children[2];
 padre.insertBefore(hijo,hermano);*/
