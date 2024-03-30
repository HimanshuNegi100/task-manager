function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskDescription = taskInput.value;

  var taskItem = document.createElement("li");
  taskItem.innerHTML = taskDescription;

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      taskItem.classList.add("completed");
    } else {
      taskItem.classList.remove("completed");
    }
  });

  var removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(removeButton);

  var taskList = document.getElementById("task-list");
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

var taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});
