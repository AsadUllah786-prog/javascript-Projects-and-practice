const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAll");

// Add Task
addTaskBtn.addEventListener("click", () => {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete">✔</button>
      <button class="delete">✖</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  // Complete task
  li.querySelector(".complete").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });
});

// Clear all tasks
clearAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
