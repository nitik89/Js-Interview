document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");
  let editMode = false;

  todoList.addEventListener("click", (event) => {
    const target = event.target;
    // console.log("target", target.tagName);
    if (target.tagName == "BUTTON") {
      const todoItem = target.parentNode;
      console.log("todoitem", todoItem);
      if (target.innerHTML == ` ❌`) {
        todoItem.remove();
      } else if (target.innerHTML == ` ✍️`) {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredValue = todoInput.value.trim();
    if (enteredValue !== "") {
      if (editMode) {
        editItem.firstChild.textContent = enteredValue;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        addData(enteredValue);
      }
    } else {
      alert("Please enter a valid task");
    }
  });
  function addData(enteredValue) {
    const listElement = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    listElement.innerHTML = `<span>${enteredValue}</span>`;
    editButton.innerHTML = ` ✍️`;
    removeButton.innerHTML = ` ❌`;
    listElement.appendChild(editButton);
    listElement.appendChild(removeButton);
    todoList.appendChild(listElement);
  }
});
