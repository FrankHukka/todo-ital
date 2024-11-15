const todoCreate = document.querySelector("input");
const todoList = document.querySelector(".todo-list");

const newBtn = document.querySelector(".newb");

const leftBox = document.querySelector("output");

const rows = todoList.rows;

const itemsLeft = () => {
    leftBox.textContent = rows.length;
}

const addNewTodo = () => {
    const todoRow = todoList.insertRow();
    todoRow.classList.add("todo-row");

    const checkBox = todoRow.insertCell(0);
    checkBox.append(document.createElement("button"));
    checkBox.classList.add("listed");

    const todoItem = todoRow.insertCell(1);
    todoItem.classList.add("list-item");

    const removeBox = todoRow.insertCell(2);
    const xB = new Image();
    xB.src = "images/icon-cross.svg";
    removeBox.classList.add("remove");
    removeBox.append(xB);

    // xB.addEventListener("click", () => {
    //     todoList.deleteRow(todoRow);
    // });

    todoItem.textContent = todoCreate.value;
    todoCreate.value = "";
}

todoCreate.addEventListener("keydown", (eve) => {
    if (eve.key === "Enter") {
        if (todoCreate.value === "") {
            eve.preventDefault;
        } else {
            addNewTodo();
            itemsLeft();
        }
    }
});

newBtn.addEventListener("click", (ev) => {
    if (todoCreate.value === "") {
        ev.preventDefault;
    } else {
        addNewTodo();
        itemsLeft();
    }
});

todoList.addEventListener("click", (e) => {
    if (e.target.matches("img")) {
        console.log("voisko nyt toimia");
    }
})

// for (const row of rows) {
//     row.addEventListener("click", (e) => {
//         if (e.target.classList.contains("remove")) {
//             todoList.deleteRow(row);
//             itemsLeft();
//         }
        
//     })
// }

// rows.forEach(row => {
//     row.addEventListener("click", () => {
//         console.log("delete");
//     })
// });