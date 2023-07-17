document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const todosUL = document.getElementById('todos');
    const todos = JSON.parse(localStorage.getItem("todos"));
     if(todos){
        todos.forEach(todo => {
            addTodo(todo)
        });
    }
     form.addEventListener('submit', (e) => {
        e.preventDefault();
         addTodo();
    });
    function addTodo(todo) {
        let todoText = input.value;
    
        if(todo){
            todoText = todo.text;
        }
    
            // const todoText = input.value;
        
            if(todoText){
                const todoE1 = document.createElement('li');
                if(todo && todo.completed){
                todoE1.classList.add("completed");
                }
                todoE1.innerText = todoText;
        
                todoE1.addEventListener("click", () => {
                    todoE1.classList.toggle("completed");
        
                    updateLS();
                });
        
                todoE1.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
        
                    todoE1.remove();
        
                    updateLS();
                })
        
                todosUL.appendChild(todoE1);
        
                input.value = "";
        
                updateLS();
            }
        
        
    }
    
    function updateLS() {
        const todosEl = document.querySelectorAll("li");
         const todos = [];
        todosEl.forEach(todoEl => {
            todos.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains("completed")
            });
        });
         localStorage.setItem("todos", JSON.stringify(todos));
    }
});