let taskNameInput = document.getElementById("taskName");
let addButton = document.getElementById("addTaskButton");
let pending = document.getElementById("pendingTasks");
let inProgress = document.getElementById("inProgressTasks");
let done = document.getElementById("doneTasks");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    let pendingHTML = "";
    let inProgressHTML = "";
    let doneHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let btnHTML = "";
        if (tasks[i].status !== "done") {
            btnHTML = '<button onclick="updateTaskStatus(' + i + ')">Chuyển tiếp</button>';
        }
        let taskHTML = '<div class="task">' +
            '<p>' + tasks[i].name + '</p> ' + btnHTML +
            '</div>';
        if (tasks[i].status === "pending") {
            pendingHTML += taskHTML;
        } else if (tasks[i].status === "inProgress") {
            inProgressHTML += taskHTML;
        } else if (tasks[i].status === "done") {
            doneHTML += taskHTML;
        }
    }
    pending.innerHTML = pendingHTML;
    inProgress.innerHTML = inProgressHTML;
    done.innerHTML = doneHTML;
}

function updateTaskStatus(index) {
    let currentStatus = tasks[index].status;
    let nextStatus = "";
    if (currentStatus === "pending") {
        nextStatus = "inProgress";
    } else if (currentStatus === "inProgress") {
        nextStatus = "done";
    }
    if (nextStatus !== "") {
        tasks[index].status = nextStatus;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function addTask() {
    let taskName = taskNameInput.value.trim();
    if (taskName !== "") {
        tasks.push({
            name: taskName,
            status: "pending"
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskNameInput.value = "";
        renderTasks();
    }
}

addButton.onclick = addTask;
renderTasks();