let form=document.getElementById('Eform');
let exList=document.getElementById('eList')
let add=document.getElementById('add')


form.addEventListener('submit',function(event){
    event.preventDefault();


    let amount=document.getElementById("exAmount").value
    let description=document.getElementById("exDes").value
    let catagory=document.getElementById("exCat").value

    let obj={
        amount:amount,
        description:description,
        catagory:catagory

    }  

    let data=JSON.stringify(obj)
    localStorage.setItem(description,data)
    
    let li=document.createElement('li');

    
    li.appendChild(document.createTextNode(amount))
    li.appendChild(document.createTextNode(":"+description))
    li.appendChild(document.createTextNode(":"+catagory))
    


    let dltBtn= document.createElement('button')
    dltBtn.className='btn-sm float-right delete'
    dltBtn.appendChild(document.createTextNode('Delete'))
    li.appendChild(dltBtn)
    dltBtn.onclick = () => {
        exList.removeChild(li);
        localStorage.removeItem(obj.description);
      };



  let editbtn=document.createElement('button');
  editbtn.className='  editbtn btn-sm float-right '
  editbtn.appendChild(document.createTextNode('edit'))
  li.appendChild(editbtn)
  editbtn.onclick=()=>{
    document.getElementById("exAmount").value=amount;
    document.getElementById("exDes").value=description;
    document.getElementById("exCat").value=catagory;
    localStorage.removeItem(obj.description);
    li.remove()

  }

    
    exList.appendChild(li)
})




