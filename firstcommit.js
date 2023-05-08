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





let odd=document.querySelectorAll('li:nth-child(odd)')
let item= document.querySelectorAll('.list-group-item:nth-child(2')

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green"
    item[i].style.color='green'
}


