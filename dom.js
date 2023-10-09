//console.dir(document);

//console.log(document.domain); // console.log(document.URL);

//console.log(document.title);

// //document.title = 123; // console.log(document.doctype);

//console.log(document.head);

//console.log(document.body);

//console.log(document.all);

// console.log(document.all[10]);

// // document.all[10].textContent = 'Hello';

// console.log(document.forms[0]);

//console.log(document.links);

// console.log(document.images);

// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');

// console.log(headerTitle);

// headerTitle.textContent = 'Hello';

// headerTitle.innerText = 'Goodbye';

//console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>Hello</h3>';

// get elements by class name


// sharpner question 2 ans :-
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';

//sharpner question 3 ans :-

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }


//sharpner question  editing it with getelementsbyclassname:-
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

// //sharpner question by tag name:-
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].style.backgroundColor = 'green';
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'bold';
// }

// queryselector sharpner question:-
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'black';
// //queryselector sharpner question:-
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'transparent';

// //queryselectorALL sharpner question:-
// var items = document.querySelectorAll('.list-group-item');
// console.log(items);
// items[1].style.color='green';
// //queryselectorALL sharpner question:-
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for (var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
// }


//traversing the dom
//parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild

// var itemList = document.querySelector('#items');
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="grey";

//parentelement
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="grey";

//childnode
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent='hello';

//lastChild
console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='hiii';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

//createElement
//create a div
var newDiv=document.createElement('div');
//add class
newDiv.className="hello";
//add id
newDiv.id="hii";

//addAtributes
newDiv.setAttribute('title','hello Div')

//create text Node
var newDivText = document.createTextNode('Hello World');
var newText = document.createTextNode('HEllo');

//add text to div
newDiv.appendChild(newDivText)
var container = document.querySelector('header .container');
var itemList = document.querySelector('#items');

var h1 =document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);
itemList.parentElement.insertBefore(newText, itemList);