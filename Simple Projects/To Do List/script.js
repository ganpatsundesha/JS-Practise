let task = document.getElementById("task")
let errorMassage = document.querySelector(".errorMassage")
const todoList = document.getElementById("taskBox")
const newDiv = document.createElement("div")

let todoTask = []

function formSubmit(e) {
    e.preventDefault();
    let value = task.value
    if (value.length <= 0) {
        errorMassage.style.opacity = "1";
    }
    else {
        errorMassage.style.opacity = "0";
        todoTask.push(value)
        addTask()
        task.value = ""
    }
}

addTask = () => {
    newDiv.innerHTML = "Task"
    todoList.appendChild(newDiv);
}