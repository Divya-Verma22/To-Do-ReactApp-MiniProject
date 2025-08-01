import "./Todo.css"

import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';




export default function Todolist() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() , isDone: false}])
    let [newTodo, setNewTodo] = useState(" ")


    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() , isDone: false }]
        })
        setNewTodo("");
    }


    let updateTaskValue = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))

    }
    let upperCaseAll = () => {
        setTodos((todos) => (
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }


            })

        ))
    }
    let MarkAll = () => {
        setTodos((todos) => (
            todos.map((todo) => {
                return {
                    ...todo,
                  isDone: true,
                }


            })

        ))
    }
    let marksAsDone = (id) => {
        setTodos((todos) => (
            todos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                     isDone: true,
                    }


                }
                else {
                    return todo;
                }



            })

        ))

    }
    let uperCaseOne= (id) => {
        setTodos((todos) => (
            todos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                   task: todo.task.toUpperCase(),
                    }


                }
                else {
                    return todo;
                }



            })

        ))

    }
   
    


    return (
        <div className="division">
            <h3>TodoList</h3>
            <input type="text" placeholder="write a task" value={newTodo} onChange={updateTaskValue} />
            <br></br>
            <br></br>

            <button  className= "btn " onClick={addNewTask}>Add!</button>
            <hr ></hr>
            <h2 >Todo List</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                            &nbsp;    &nbsp;
                            <button className= "btn " onClick={() => deleteTodo(todo.id)}>Delete!!</button>
                            &nbsp;    &nbsp;
                            <button className= "btn " onClick={() => uperCaseOne(todo.id)}>Upercase One!</button>
                            &nbsp;    &nbsp;
                            <button className= "btn " onClick={()=>marksAsDone(todo.id)}>Done task</button>
                        </li>
                    ))
                }
            </ul>
            <button className= " allbtn" onClick={upperCaseAll}>UppercaseAll!!</button>
            &nbsp;    &nbsp;
            <button className= " allbtn" onClick={MarkAll}>MarkAllDone</button>
          

        </div>
    );
}



