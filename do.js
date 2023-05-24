const add = document.getElementById("sub");
const myForn = document.getElementById("myForm");
const wishUl = document.getElementById("wish");
const doneUl = document.getElementById("done");

myForn.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  const name = document.getElementById("do").value;
  const des = document.getElementById("des").value;

  const li = document.createElement("li");
  const doneBtn = document.createElement("button");
  doneBtn.id = "dn";
  doneBtn.textContent = "done";
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "X";
  cancelBtn.id = "cd";

  li.textContent = `${name}: ${des}`;
  li.appendChild(doneBtn);
  li.appendChild(cancelBtn);
  wishUl.appendChild(li);
  axios
    .post("https://crudcrud.com/api/256de31ae3144c9ca997b990c6dd1e42/Items", {
      name,
      des,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  document.getElementById("do").value = "";
  document.getElementById("des").value = "";
}
window.addEventListener("DOMContentLoaded", showIncreen);
function showIncreen(e) {
  e.preventDefault();
  axios
    .get("https://crudcrud.com/api/256de31ae3144c9ca997b990c6dd1e42/Items")
    .then((res) => {
      res.data.forEach((ele) => {
        const doName = ele["name"];
        const doDes = ele["des"];

        const li = document.createElement("li");
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "done";
        doneBtn.id = "dn";
        
        doneBtn.onclick = () => {
          doneUl.appendChild(li);
          wishUl.removeChild(li)
          li.removeChild(doneBtn);
          li.removeChild(cancelBtn);
        };
       

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "X";
        cancelBtn.id = "cd";
        cancelBtn.onclick = () => {
          axios.delete(
            "https://crudcrud.com/api/256de31ae3144c9ca997b990c6dd1e42/Items/" +
              ele._id
          );
          wishUl.removeChild(li);
        };

        li.textContent = `${doName}: ${doDes}`;
        li.appendChild(doneBtn);
        li.appendChild(cancelBtn);
        wishUl.appendChild(li);
      });
    });
}
