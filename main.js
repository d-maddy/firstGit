// const ul=document.querySelector('.items');
//  ul.remove();
//  ul.lastElementChild.remove();

// ul.firstElementChild.textContent='Hello';
// ul.children[1].innerText='brad';
// ul.lastElementChild.innerHTML="<h1>Hello</h1>";
// ul.children[0].style.color='green';
// ul.children[1].style.color='yellow';
const btn = document.querySelector(".btn");
const myForn = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const phNum = document.getElementById("phone");

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.add("bg-dark");
});

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.add("bg-dark");
});

myForn.addEventListener("submit", onsubmit);
function onsubmit(e) {
  e.preventDefault();

  let obj = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phNum.value,
  };
  let user = JSON.stringify(obj);
  localStorage.setItem(emailInput.value, user);

  // let objN=JSON.parse(localStorage.getItem('user'));
  // localStorage.setItem('name',nameInput.value)
  // localStorage.setItem('email',emailInput.value)
  // localStorage.setItem(nameInput.value,emailInput.value);
  // console.log(nameInput.value);
  // console.log(emailInput.value);

  const li = document.createElement("li");

  let deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "Delete";

  deleteBtn.onclick = () => {
    userList.removeChild(li);
    localStorage.removeItem(obj.email);
  };

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "please enter all the fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    li.appendChild(
      document.createTextNode(
        `${nameInput.value} : ${emailInput.value} : ${phNum.value}`
      )
    );
    li.appendChild(deleteBtn);
    userList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
    phNum.value = "";
  }
}
