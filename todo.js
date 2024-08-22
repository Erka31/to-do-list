const addButton = document.getElementById("add");
const input = document.getElementById("input");
const todoListContainer = document.getElementById("list");

addButton.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue.length == 0) {
    alert("hoosn bn");
    return;
  }

  inputValue == "";

  const todoContainer = document.createElement("div");

  todoContainer.innerHTML = inputValue;

  const deleteButton = document.createElement("button");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  deleteButton.style.marginLeft = "5px";
  deleteButton.className = "button";
  span1.className = "shadow";
  span2.className = "edge";
  span3.className = "front text";
  span3.innerHTML = "delete";
  deleteButton.appendChild(span1);
  deleteButton.appendChild(span2);
  deleteButton.appendChild(span3);

  todoContainer.appendChild(deleteButton);
  todoListContainer.appendChild(todoContainer);

  const editbutton = document.createElement("button");
  const span4 = document.createElement("span");
  const span5 = document.createElement("span");
  const span6 = document.createElement("span");
  editbutton.className = "button";
  span4.className = "shadow";
  span5.className = "edge";
  span6.className = "front text";
  span6.innerHTML = "edit";
  editbutton.appendChild(span4);
  editbutton.appendChild(span5);
  editbutton.appendChild(span6);

  const editinput = document.createElement("input");
  const donebutton = document.createElement("button");
  donebutton.innerHTML = "done";
  editinput.className = "input";
  donebutton.className = "custom-btn btn-2";
  todoContainer.appendChild(editbutton);
  todoListContainer.appendChild(todoContainer);

  const completebutton = document.createElement("button");
  const span7 = document.createElement("span");
  const span8 = document.createElement("span");
  const span9 = document.createElement("span");
  editbutton.className = "button";
  span7.className = "shadow";
  span8.className = "edge";
  span9.className = "front text";
  span9.innerHTML = "complete";
  completebutton.appendChild(span7);
  completebutton.appendChild(span8);
  completebutton.appendChild(span9);
  todoContainer.appendChild(completebutton);
  completebutton.className = "button";

  deleteButton.addEventListener("click", function () {
    todoContainer.remove();
    editinput.remove();
    donebutton.remove();
    completebutton.remove();
    time.remove();
  });

  editbutton.addEventListener("click", function () {
    todoListContainer.appendChild(editinput);
    todoListContainer.appendChild(donebutton);
  });

  donebutton.addEventListener("click", function () {
    if (editinput.value == "") {
      alert("hoosn bn");
    } else {
      todoContainer.innerHTML = editinput.value;
      todoContainer.appendChild(deleteButton);
      todoContainer.appendChild(editbutton);
      todoContainer.appendChild(completebutton);
      editinput.remove();
      donebutton.remove();
    }
  });

  completebutton.addEventListener("click", function () {
    const complete = document.getElementById("complete");
    complete.appendChild(todoContainer);
    editbutton.remove();
    completebutton.remove();
    time.remove();
  });
  const time = document.createElement("div");
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedTime = formatter.format(date);
  time.textContent = formattedTime;
  todoListContainer.appendChild(time);

  input.value = "";
});

localStorage.getItem("email");
localStorage.getItem("phone number");
localStorage.getItem("password");

