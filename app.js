const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", function() {
  if (taskInput.value === "") return;

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = taskInput.value;
  taskList.appendChild(task);

  taskInput.value = "";
});
