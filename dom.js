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


//sharpner question 2 ans :-
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = 'green';

//sharpner question 3 ans :-

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
