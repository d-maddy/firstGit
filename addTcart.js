const myform = document.getElementById("myForm");
const itemList = document.getElementById("list");
const itemName = document.getElementById("product");
const itemAmount = document.getElementById("amount");
const itemTotal = document.getElementById("totalAmount");

myform.addEventListener("submit", addItem);

let totalAmount = 0;
function show(obj) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${obj.name} :₹${obj.amount}`));

  const dltBtn = document.createElement("button");
  dltBtn.textContent = "✘";
  dltBtn.id='dlt'
  dltBtn.onclick = () => {
    axios.delete(
      "https://crudcrud.com/api/6daddc5af6f64e96a5e10745eef3679f/items/" +
        obj._id
    );
    itemList.removeChild(li);
    totalAmount = totalAmount - parseInt(obj.amount);
    itemTotal.textContent = totalAmount;
  };
  li.appendChild(dltBtn);
  itemList.appendChild(li);

  totalAmount = totalAmount + parseInt(obj.amount);
  itemTotal.textContent = totalAmount;

  document.getElementById("product").value = "";
  document.getElementById("amount").value = "";
}

function addItem(e) {
  e.preventDefault();
  const obj = { name: itemName.value, amount: itemAmount.value };
  axios
    .post(
      "https://crudcrud.com/api/6daddc5af6f64e96a5e10745eef3679f/items",
      obj
    )
    .then((res) => {
      show(res.data);
      console.log(res);
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", showIncreen);
function showIncreen() {
  axios
    .get("https://crudcrud.com/api/6daddc5af6f64e96a5e10745eef3679f/items")
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        show(res.data[i]);
      }
    });
}
