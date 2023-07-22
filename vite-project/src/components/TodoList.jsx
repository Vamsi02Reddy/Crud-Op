import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {

    const[todos,setTodos]=useState([])

    const addTodo=(todo)=>{
        if(!todo.text){
            return;
        }

        const newTodos=[todo,...todos];
        setTodos(newTodos);
        console.log(todo,...todos);     //todo will show the current one    and  ...spread operator will show the previous one in console
    }

    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text){
            return;
        }

        setTodos(prev=>prev.map(item => item.id === todoId ? newValue : item))
    }

    const removeTodo=(id)=>{
        const removeArr=[...todos].filter(todo=>todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo=(id)=>{
        let updatedTodos=todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete =! todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    

  return (
    <div>
        <p style={{textAlign:"center",marginTop:"5px",fontSize:"30px"}}>"Hello, I am Vamsi, studying at Bennett University".</p>
        <h1 style={{textAlign:"center"}}>What are the scheduled activities for today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList