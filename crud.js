const btn = document.querySelector(".btn");
const myForn = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const userList = document.querySelector("#users");

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.add("bg-dark");
});
btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.add("bg-dark");
});
myForn.addEventListener("submit", onsubmit);

const li = document.createElement("li");
function showScreen(obj) {
    li.appendChild(document.createTextNode(JSON.stringify(obj)));
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
      "https://crudcrud.com/api/e8aca2708b7b4901b7f49dc288eb261e/appointmentData",
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



axios
  .get(
    "https://crudcrud.com/api/e8aca2708b7b4901b7f49dc288eb261e/appointmentData"
  )
  .then((response) => {
    showScreen(response.data);
  });
