const todoCreate = document.querySelector("input");
const todoList = document.querySelector(".todo-list");
const newBtn = document.querySelector(".newb");

function addNewTodo() {
    const todoRow = document.createElement("tr");
    todoRow.classList.add("todo-row");

    const todoItem = document.createElement("td");
    todoItem.classList.add("list-item");

    const checkBox = document.createElement("td");
    checkBox.append(document.createElement("button"));
    checkBox.classList.add("listed");

    const removeBox = document.createElement("td");
    const xB = document.createElement("img");
    xB.setAttribute("src", "images/icon-cross.svg");
    removeBox.classList.add("remove");
    removeBox.append(xB);

    todoList.appendChild(todoRow);
    todoRow.appendChild(checkBox);
    todoRow.appendChild(todoItem);
    todoRow.appendChild(removeBox);

    todoItem.textContent = todoCreate.value;
    todoCreate.value = "";
}

todoCreate.addEventListener("keydown", (eve) => {
    if (eve.key === "Enter") {
        if (todoCreate.value === "") {
            eve.preventDefault;
        } else {
            addNewTodo();
        }
    }
})

newBtn.addEventListener("click", (ev) => {
    if (todoCreate.value === "") {
        ev.preventDefault;
    } else {
        addNewTodo();
    }
})

const leftBox = document.getElementById("items-left");
// const itemsCount = todoList.childElementCount;
// leftBox.textContent = `${itemsCount} items left`;