import React, {useEffect, useState} from "react";
import ToDoForm from "./ToDoForm";
import {v4 as uuidv4} from "uuid";
import ToDo from "./ToDo";

import AddDescript from "./AddDescript";
import EditToDoForm from "./editToDoForm";
uuidv4();
const ToDoWrapper = () => {
    const [toDos, setTodos] = useState([]);
    const [activeEditId, setActiveEditId] = useState(null);
    const [activeDescriptId, setActiveDescriptId] = useState(null);

    //new localStoreage
    useEffect(() => {
        const savedTodos = localStorage.getItem("toDos");
        if (savedTodos) {
            try {
                const parsedTodos = JSON.parse(savedTodos);
                setTodos(parsedTodos);
            } catch (error) {
                console.error("check effect");
            }
        }
    }, []);
    const addToDo = (todo) => {
        const newId = uuidv4();
        const newTodos = [
            ...toDos,
            {
                id: newId,
                task: todo,
                completed: false,
                isEditing: false,
                description: "",
            },
        ];
        setTodos(newTodos);
        localStorage.setItem("toDos", JSON.stringify(newTodos));
    };

    const toggleComplete = (id) => {
        const addNewTtask = toDos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(addNewTtask);
        localStorage.setItem("toDos", JSON.stringify(addNewTtask));
    };

    const deleteComplete = (id) => {
        const deleteTodo = toDos.filter((todo) => todo.id !== id);
        setTodos(deleteTodo);
        localStorage.setItem("toDos", JSON.stringify(deleteTodo));
    };

    const editTodo = (id) => {
        setActiveEditId(id);
        const completedEdit = toDos.map((todo) =>
            todo.id === id ? {...todo, isEditing: true} : todo
        );
        setTodos(completedEdit);
        localStorage.setItem("toDos", JSON.stringify(completedEdit));
        setActiveDescriptId(null);
    };

    const editTask = (id, task) => {
        const completedEditTask = toDos.map((todo) =>
            todo.id === id
                ? {
                      ...todo,
                      task,
                      //   isEditing: !todo.isEditing,
                      isEditing: false,
                  }
                : todo
        );
        setTodos(completedEditTask);
        localStorage.setItem("toDos", JSON.stringify(completedEditTask));
        setActiveEditId(null);
    };

    const description = (id, description) => {
        const addDescription = toDos.map((todo) =>
            todo.id === id ? {...todo, description: description} : todo
        );
        setTodos(addDescription);
        localStorage.setItem("toDos", JSON.stringify(addDescription));
        setActiveDescriptId(null);
    };

    const handleAddDescript = (id) => {
        setActiveDescriptId(id);
        setActiveEditId(null);
    };

    return (
        <div className="TodoWrapper">
            <div className="container-wrapper">
                <h1>Get things done!</h1>
                <ToDoForm addToDo={addToDo} />
            </div>
            <div className="todo-list">
                {toDos.map((todo, index) => (
                    <div key={index}>
                        <ToDo
                            task={todo}
                            toggleComplete={toggleComplete}
                            deleteComplete={deleteComplete}
                            editTodo={editTodo}
                            descript={handleAddDescript}
                        />
                        {activeEditId === todo.id && (
                            <EditToDoForm editTodo={editTask} task={todo} />
                        )}
                        {activeDescriptId === todo.id && (
                            <AddDescript descript={description} task={todo} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoWrapper;
