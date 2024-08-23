import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import {v4 as uuidv4} from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
uuidv4();
const ToDoWrapper = () => {
    const [toDos, setTodos] = useState([]);
    const addToDo = (todo) => {
        setTodos([
            ...toDos,
            {
                id: uuidv4(),
                task: todo,
                completed: false,
                isEditing: false,
                description: "",
            },
        ]);
    };
    const toggleComplete = (id) => {
        setTodos(
            toDos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };
    const deleteComplete = (id) => {
        setTodos(toDos.filter((todo) => todo.id !== id));
    };
    const editTodo = (id) => {
        setTodos(
            toDos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    };
    const editTask = (task, id) => {
        setTodos(
            toDos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          task,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    };
    const description = (id, description) => {
        setTodos(
            toDos.map((todo) =>
                todo.id === id ? {...todo, description: description} : todo
            )
        );
    };
    return (
        <div className="TodoWrapper">
            <h1> Get thing done!</h1>
            <ToDoForm addToDo={addToDo} />
            {toDos.map((todo, index) =>
                todo.isEditing ? (
                    <EditToDoForm editTodo={editTask} task={todo} />
                ) : (
                    <ToDo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteComplete={deleteComplete}
                        editTodo={editTodo}
                        descript={description}
                    />
                )
            )}
        </div>
    );
};

export default ToDoWrapper;
