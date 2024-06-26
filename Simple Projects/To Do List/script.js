let task = document.getElementById("task")
let errorMassage = document.querySelector(".errorMassage")
const todoList = document.getElementById("taskBox")

// LocalStorage Use
let currentTodos = localStorage.getItem("todos")
let todoTask = JSON.parse(currentTodos)
if (!todoTask) {
    todoTask = []
}

let editMode = false
let editId = null

window.addEventListener("load", (event) => {
    todoTask.forEach((item) => {
        createTodoDiv(item.id, item.value)
    })
});

function formSubmit(e) {
    e.preventDefault();
    let value = task.value.trim()
    if (value.length <= 0 && value.trim().length <= 0) {
        errorMassage.style.display = "block";
    }
    else {
        if (editMode) {
            updateTask(editId, value)
        }
        else {
            addTask(value)
        }
        errorMassage.style.display = "none";
        task.value = ""
        task.focus()
    }
}

function createTodoDiv(id, value) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    newDiv.setAttribute("data-id", id);

    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    img1.setAttribute("class", "edit");
    img2.setAttribute("class", "delete");

    img1.src = "./images/edit.svg";
    img2.src = "./images/delete.svg";

    newDiv.appendChild(img1);
    newDiv.appendChild(img2);

    const textNode = document.createTextNode(value);
    newDiv.appendChild(textNode);
    todoList.appendChild(newDiv);

    img2.addEventListener("click", () => deleteTask(id))
    img1.addEventListener("click", () => editTask(id))
}

const addTask = (value) => {

    const id = Date.now()
    todoTask.push({ id, value });

    createTodoDiv(id, value)

    // add to local Storage
    let stogageTodos = JSON.stringify(todoTask)
    localStorage.setItem("todos", stogageTodos)
}


function deleteTask(id) {
    const index = todoTask.findIndex(task => task.id === id)

    if (index !== -1) {
        todoTask.splice(index, 1);
        const taskDiv = document.querySelector(`.todo[data-id='${id}']`)
        if (taskDiv) {
            todoList.removeChild(taskDiv);
        }
    }
    let stringtTodos = JSON.stringify(todoTask)
    localStorage.setItem("todos", stringtTodos)
}

function editTask(id) {
    let taskToEdit = todoTask.find(todo => todo.id === id)
    if (taskToEdit) {
        task.value = taskToEdit.value
        editMode = true;
        editId = taskToEdit.id;
    }
}

function updateTask(id, newValue) {
    let taskToEdit = todoTask.find(todo => todo.id === id)

    if (taskToEdit) {
        taskToEdit.value = newValue

        const taskDiv = document.querySelector(`.todo[data-id='${id}']`)
        if (taskDiv) {
            taskDiv.childNodes[2].nodeValue = newValue
        }
        editMode = false
        editId = null
    }
    let stringtTodos = JSON.stringify(todoTask)
    localStorage.setItem("todos", stringtTodos)
}