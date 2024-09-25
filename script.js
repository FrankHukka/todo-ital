const left = document.getElementById("items-left");

const todoCreate = document.querySelector("input");
const todoList = document.querySelector("table");

todoCreate.addEventListener("keydown", (eve) => {
    if (eve.key === "Enter") {
        if (todoCreate.value === "") {
            eve.preventDefault;
        } else {
            const todoRow = document.createElement("tr");
            const todoItem = document.createElement("td");
            todoList.appendChild(todoRow)
            .appendChild(todoItem);
            todoItem.textContent = todoCreate.value;
            todoCreate.value = "";
        }
    }
})