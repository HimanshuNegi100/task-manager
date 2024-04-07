function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskDescription = taskInput.value;

  var taskItem = document.createElement("li");
  var text = document.createElement("p");
  text.innerText = taskDescription;

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      text.classList.add("completed");
    } else {
      text.classList.remove("completed");
    }
  });

  var removeButton = document.createElement("button");

  removeButton.innerHTML = "Remove";

  removeButton.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(text);
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
