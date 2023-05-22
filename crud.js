const btn = document.querySelector(".btn");
const myForn = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const userList = document.querySelector("#users");

myForn.addEventListener("submit", onsubmit);

function showScreen(obj) {
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`${obj.name} :${obj.email} :${obj.number}`)
  );

  const dltBtn = document.createElement("button");
  dltBtn.className = "btn-sm float-right delete ";
  dltBtn.appendChild(document.createTextNode("Delete"));

  dltBtn.onclick = () => {
    axios.delete(
      "https://crudcrud.com/api/cd6daae67c7c45afb1e59a957fe98bf6/appointmentData/" +
        obj._id
    );
    userList.removeChild(li);
  };

  const editBtn = document.createElement("button");
  editBtn.className = "editbtn btn-sm float-right ";
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.onclick=()=>{
    document.querySelector("#name").value=obj.name;
    document.querySelector("#email").value=obj.email;
    document.querySelector("#number").value=obj.number;

    axios.delete(
      "https://crudcrud.com/api/cd6daae67c7c45afb1e59a957fe98bf6/appointmentData/" +
        obj._id
    );
    
    userList.removeChild(li);
  

  }

  li.appendChild(dltBtn);
  li.appendChild(editBtn);

  userList.appendChild(li);

  nameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";
}

function onsubmit(e) {
  e.preventDefault();

  const obj = {
    name: nameInput.value,
    email: emailInput.value,
    number: numberInput.value,
  };

  axios
    .post(
      "https://crudcrud.com/api/cd6daae67c7c45afb1e59a957fe98bf6/appointmentData",
      obj
    )
    .then((res) => {
      showScreen(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/cd6daae67c7c45afb1e59a957fe98bf6/appointmentData"
    )
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        showScreen(response.data[i]);
      }
    });
});
