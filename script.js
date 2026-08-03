/* ==========================================
   TASKMASTER
   Project 3 - JavaScript
========================================== */

/* ========= LIVE CLOCK ========= */

const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {

    const now = new Date();

    clock.textContent = now.toLocaleTimeString();

    date.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

}

updateClock();

setInterval(updateClock, 1000);


/* ========= TASK MANAGER ========= */

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

const searchTask = document.getElementById("searchTask");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const remainingTasks = document.getElementById("remainingTasks");


function updateStats() {

    const tasks = document.querySelectorAll("#taskList li");

    const completed = document.querySelectorAll("#taskList li.completed");

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = completed.length;

    remainingTasks.textContent = tasks.length - completed.length;

}


function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;

    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = taskText;

    li.appendChild(span);


    const buttonBox = document.createElement("div");

    buttonBox.classList.add("task-buttons");


    const completeBtn = document.createElement("button");

    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    completeBtn.classList.add("complete-btn");


    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteBtn.classList.add("delete-btn");


    completeBtn.addEventListener("click", function () {

        li.classList.toggle("completed");

        updateStats();

    });


    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateStats();

    });


    buttonBox.appendChild(completeBtn);

    buttonBox.appendChild(deleteBtn);

    li.appendChild(buttonBox);

    taskList.appendChild(li);

    taskInput.value = "";

    updateStats();

}


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


/* ========= SEARCH ========= */

searchTask.addEventListener("keyup", function () {

    const searchValue = this.value.toLowerCase();

    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function (task) {

        const text = task.innerText.toLowerCase();

        if (text.includes(searchValue)) {

            task.style.display = "flex";

        }

        else {

            task.style.display = "none";

        }

    });

});


/* ========= DARK MODE ========= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i> Light Mode';

    }

    else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i> Toggle Dark Mode';

    }

});


/* ========= CONTACT FORM ========= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Your message has been sent successfully!";

    contactForm.reset();

});


/* ========= INITIALIZE ========= */

updateStats();