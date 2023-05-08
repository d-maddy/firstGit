//console.log(document.title);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.form);
// console.log(document.link);
// console.log(document.images);

// let head=document.getElementById('header-title');
// console.log(head);

// head.innerText='my own list'
// head.textContent='my list'
// head.style.borderBottom="solid black"
// head.innerHTML="<h3>hello</h3>"
// let header=document.getElementById('main-header');
// header.style.borderBottom="solid black"
// let addI=document.getElementById('add')
// addI.style.color="green"
// addI.style.fontWeight="bold"

// let items=document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent=" hello"
// items[1].style.fontWeight="bold"
// items[2].style.backgroundColor="green"

// for(let i=0;i<items.length;i++){
// items[i].style.fontWeight="bold"
// }

// let tag=document.getElementsByTagName('li')
// console.log(tag);
// console.log(items[1]);
// tag[1].textContent=" hello"
// tag[1].style.fontWeight="bold"
// tag[2].style.backgroundColor="green"



// let header=document.querySelector('#main-header');
// header.style.borderBottom=' solid black 4px'

// let input=document.querySelector('input');
// input.value="hello world";

// let submit=document.querySelector('input[type="submit"]');
// submit.value="send";

// let item =document.querySelector('.list-group-item');
// item.style.color="red";

// let lItem=document.querySelector('.list-group-item:last-child');
// lItem.style.color='green'

// let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green'
// let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='white'


// let title=document.querySelectorAll('.title')
// console.log(title);

// let item= document.querySelectorAll('.list-group-item:nth-child(2')
// item.style.color='green'





// let odd=document.querySelectorAll('li:nth-child(odd)')
// let item= document.querySelectorAll('.list-group-item:nth-child(2')

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green"
//     item[i].style.color='green'
// }

//parrentNode
let item=document.querySelector('#items')
// console.log(item.parentNode);
// item.parentNode.style.backgroundColor='#f4f4f4'
// console.log(item.parentNode.parentNode);

//parrentelement
// console.log(item.parentElement);
// item.parentElement.style.backgroundColor='#f4f4f4'
// console.log(item.parentElement.parentElement);

//childnode
// console.log(item.childNodes);
// console.log(item.children);
// console.log(item.children[2]);
// item.children[0].style.color='red'

// console.log(item.firstChild);

// console.log(item.firstElementChild);
// item.firstElementChild.style.color='blue'
// console.log(item.lastElementChild);
// item.lastElementChild.style.color='yellow'


//sibling

// console.log(item.nextSibling);
// console.log(item.nextElementSibling);

// console.log(item.previousSibling);
// console.log(item.previousElementSibling);
// item.previousElementSibling.style.color='green'

//creat
let newDiv=document.createElement('div')
newDiv.className='hello'
newDiv.id='hello1'
newDiv.setAttribute('title','text')
let txt=document.createTextNode('hello world')
newDiv.appendChild(txt)
newDiv.style.fontSize='30px'
console.log(newDiv);

let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')

container.insertBefore(newDiv,h1)

let parentnode=document.getElementById('items');
let node=document.createElement('li');
node.className='node1'
let ntxt=document.createTextNode('hello world')
node.appendChild(ntxt)

parentnode.innerHTML=node.innerHTML+parentnode.innerHTML


 console.log(parentnode.innerHTML);






