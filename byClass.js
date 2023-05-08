let items=document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);
items[1].textContent=" hello"
items[1].style.fontWeight="bold"

items[2].style.backgroundColor="green"

for(let i=0;i<items.length;i++){
items[i].style.fontWeight="bold"
}