// EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title= 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title').textContent = "Store Items";
// var headerTitle=document.getElementById('header-title').style.borderBottom='solid 3px #000';
// var main=document.getElementById('main').style.color='green';
// var main=document.getElementById('main').style.fontWeight='bold';
//console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
// console.log(headerTitle.textContent);

//headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle

// GET ELEMENT BY CLASS NAME
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// //items[1].textContent='hello';

// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }


// GET ELEMENT BY TAG NAME
// var items=document.getElementsByTagName('list-group-item');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello';

// li[2].style.backgroundColor='green';
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

//QUERYSELECTOR
// var header = document.querySelector('main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value = "SEND"
// var item=document.querySelector('.list-group-item');
// item.style.Color='red'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = "none";

// var title = document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }
// var second = document.querySelector('.list-group-item:nth-child(2)');
// second.style.color = "green";
// var third = document.querySelector('.list-group-item:nth-child(3)');
// third.style.display = "none";

// TRAVERSING THE DOM //
//var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// var h1 = document.querySelector('#header-title');
// h1.parentNode.textContent = 'HELLO Item Lister';
// h1.style.fontSize = '100px';

// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// // childNodes
// // console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello';

// // nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// createElement
// create a div
// var newDiv = document.createElement('div');
// // newDiv.className = 'hello'; // add class
// // newDiv.id = 'hello1'; // add id
// // newDiv.setAttribute('title','Hello Div'); // add attribute
// //create a text Node
// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText); // add text to div
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// h1.appendChild('HELLO');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';

// console.log(newDiv,h1);

// var addHead = document.createElement('h1');
// var textAdd = document.createTextNode('Hello');
// addHead.appendChild(textAdd);
// var head = document.getElementById("main-header");
// head.insertBefore(addHead,head);

// var addItem = document.createElement('li');
// var addText = document.createTextNode('Hello');
// addItem.appendChild(addText);
// var list = document.getElementById("items");
// list.insertBefore(addItem,list.children[0]);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit' , addItem);
// Delete event
itemList.addEventListener('click' , removeItem);
// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //console.log(li);
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li);

    
}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}










