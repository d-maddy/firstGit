const add = document.getElementById("sub");
const myForn = document.getElementById("myForm");
const wishUl = document.getElementById("wish");
const doneUl = document.getElementById("done");
const nameInput = document.getElementById("do");
const desInput = document.getElementById("des");
myForn.addEventListener("submit", addItem);

function show(obj) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${obj.name} ${obj.description}`));

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.id = "dn";
  doneBtn.onclick = () => {
    axios.put(
      "https://crudcrud.com/api/beb1c77b559746eb96b3fffa31f9ae0f/Items/" +
        obj._id,
      {
        name: obj.name,
        description: obj.description,
        flag: "done",
      }
    ).then(()=>{
      wishUl.removeChild(li);
      doneUl.appendChild(li);
      li.removeChild(doneBtn);
      li.removeChild(cancelBtn);
    })
  };
  

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "✘";
  cancelBtn.id = "cd";
  cancelBtn.onclick = () => {
    axios.delete(
      "https://crudcrud.com/api/beb1c77b559746eb96b3fffa31f9ae0f/Items/" +
        obj._id
    )
    wishUl.removeChild(li);
  };

  li.appendChild(doneBtn);
  li.appendChild(cancelBtn);

  if (obj.flag === "undone") {
    wishUl.appendChild(li);
  } else if (obj.flag === "done") {
    doneUl.appendChild(li);
    li.removeChild(doneBtn);
    li.removeChild(cancelBtn);
  }

  document.getElementById("do").value = "";
  document.getElementById("des").value = "";
}

function addItem(e) {
  e.preventDefault();
  const obj = {
    name: nameInput.value,
    description: desInput.value,
    flag: "undone",
  };

  axios
    .post(
      "https://crudcrud.com/api/beb1c77b559746eb96b3fffa31f9ae0f/Items",
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
  axios.get("https://crudcrud.com/api/beb1c77b559746eb96b3fffa31f9ae0f/Items")
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        show(res.data[i]);
      }
    });
   
}
