import { useEffect, useState } from "react";
import TodoCard from '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-Tracker/to-do-tracker/client/src/todo/TodoCard.js'

function ListTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((r) => r.json())
      .then(setTodos);
  }, []);

  
  return ( 
    
    <div>
            <div>
                {todos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
                ))}
            </div>
    </div>
  
  )
}

export default ListTodo;
