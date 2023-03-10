import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

function List() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo=>{
    const newTodos = todos.map(todo =>{
        if(todo===selectedTodo){
            return{
                ...todo,
                complete: !todo.complete
            }
        }
        return todo
    });
    setTodos(newTodos)
  }

  const addTodo:AddTodo =(newTodo)=>{
    setTodos([...todos,{text:newTodo,complete:false}])
  }

  return (
    <>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <AddTodoForm addTodo={addTodo}/>
    </>
  );
}

export default List;
