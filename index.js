//SELECTORS
const todoInput = document.getElementById("todo-input");
const todoSubmit = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");

//EVENTLISTENERS
todoSubmit.addEventListener("click", function () {
  addTodo();
});

todoInput.addEventListener("keypress", (e) => {
  if (e.which === 13) {
    addTodo();
  }
});

//FUNCTION ADDTODO
function addTodo() {
  const myTodos = [];
  if (todoInput.value == "") {
    window.alert("The Input is Empty");
  } else {
    myTodos.push(todoInput.value);
    for (let i = 0; i < myTodos.length; i++) {
      //CREATE TODODIV
      let todoDiv = document.createElement("div");
      todoDiv.classList.add("item-div");
      //CREATE TODO ITEMS
      let listItem = document.createElement("li");
      listItem.innerText = myTodos[i];
      //CREATE CHECK BUTTON
      let checkButton = document.createElement("button");
      checkButton.innerHTML = '<i class="fas fa-check"></i>';
      checkButton.classList.add("checked");
      checkButton.addEventListener("click", () => {
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "#a1a1a1";
      });
      //CREATE DELETE BUTTON
      let trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add("delete");
      trashButton.addEventListener("click", () => {
        todoDiv.remove();
      });
      //APPEND
      todoDiv.appendChild(listItem);
      todoDiv.appendChild(checkButton);
      todoDiv.appendChild(trashButton);

      listItem.classList.add("list-item");
      todoList.appendChild(todoDiv);
    }
  }

  todoInput.value = "";
  todoInput.focus();
}


