let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter= document.getElementById('filter')


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup',filterItems);




function addItem(e){
  e.preventDefault();

  
  let newItem = document.getElementById('item').value;
  
  let description=document.getElementById('description').value

 
  let li = document.createElement('li');
  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));

  li.appendChild(document.createTextNode(" "+description));




  let deleteBtn = document.createElement('button');

  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  
  deleteBtn.appendChild(document.createTextNode('X'));

  
  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  let editbtn=document.createElement('button');
  editbtn.className='  editbtn btn-sm float-right '
  editbtn.appendChild(document.createTextNode('edit'))
  li.appendChild(editbtn)
  itemList.appendChild(li)
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// if(nameInput.value==='' || emailInput.value===''){ 
//   msg.classList.add('error');
//   msg.innerHTML='please enter all the fields'; 
//   setTimeout(()=>msg.remove(),3000);
// }
// else{
 
//   li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phNum.value}`));
//   userList.appendChild(li);

//   nameInput.value='';
//   emailInput.value='';
//   phNum.value='';
// }


function filterItems(e){
  
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');

  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let description=item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLocaleLowerCase().indexOf(text) !=-1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

