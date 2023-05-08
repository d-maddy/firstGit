let form = document.getElementById('addForm');
let itemList = document.getElementById('items');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);




function addItem(e){
  e.preventDefault();

  
  let newItem = document.getElementById('item').value;

 
  let li = document.createElement('li');

  li.className = 'list-group-item';
 
  li.appendChild(document.createTextNode(newItem));


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


