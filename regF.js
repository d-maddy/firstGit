const btn=document.querySelector('.btn');
const myForn=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');


btn.addEventListener('mouseover',(e)=>{
e.preventDefault();
document.querySelector('body').classList.add('bg-dark');
});
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('body').classList.add('bg-dark');
    });
    myForn.addEventListener('submit',onsubmit);

    function onsubmit(e){
        e.preventDefault();
        
        // localStorage.setItem('name',nameInput.value)
        // localStorage.setItem('email',emailInput.value)
        
        localStorage.setItem(nameInput.value,emailInput.value);
        

        console.log(nameInput.value);
        console.log(emailInput.value);

        if(nameInput.value==='' || emailInput.value===''){
            msg.classList.add('error');
            msg.innerHTML='please enter all the fields'; 
            setTimeout(()=>msg.remove(),3000);
        }
        else{
            const li=document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
            userList.appendChild(li);
            nameInput.value='';
            emailInput.value='';
        }
    }
