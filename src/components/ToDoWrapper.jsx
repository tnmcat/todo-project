import React, {useState, useEffect} from "react";
import ToDoForm from "./ToDoForm";
import {v4 as uuidv4} from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./editToDoForm";
import AddDescript from "./AddDescript";
uuidv4();
const ToDoWrapper = () => {
    const [toDos, setTodos] = useState([]);
    const [activeEditId, setActiveEditId] = useState(null);
    const [activeDescriptId, setActiveDescriptId] = useState(null);
    const addToDo = (todo) => {
        const newId = uuidv4();
        console.log("Task created - ID:", newId);
        setTodos([
            ...toDos,
            {
                id: newId,
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
        setActiveEditId(id);
        setTodos(
            toDos.map((todo) =>
                todo.id === id ? {...todo, isEditing: true} : todo
            )
        );
        setActiveDescriptId(null);
    };

    const editTask = (id, task) => {
        setTodos(
            toDos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          task,
                          //   isEditing: !todo.isEditing,
                          isEditing: false,
                      }
                    : todo
            )
        );
        setActiveEditId(null);
    };

    const description = (id, description) => {
        console.log(`aaaaa id: ${id}, description: ${description}`);
        setTodos(
            toDos.map((todo) =>
                todo.id === id ? {...todo, description: description} : todo
            )
        );

        setActiveDescriptId(null);
    };

    const handleAddDescript = (id) => {
        setActiveDescriptId(id);
        setActiveEditId(null);
    };

    return (
        <div className="TodoWrapper">
            <h1>Get things done!</h1>
            <ToDoForm addToDo={addToDo} />
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
    );
};

export default ToDoWrapper;
