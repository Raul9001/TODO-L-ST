function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    
    if (todoInput.value !== "") {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";
        todoItem.textContent = todoInput.value;
        todoList.appendChild(todoItem);
        todoInput.value = "";
        
        todoItem.onclick = function() {
            this.parentNode.removeChild(this);
        };
    } else {
        alert("Please enter a task!");
    }
}