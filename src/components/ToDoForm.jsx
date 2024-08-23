import React, {useState} from "react";
// check sau tại sao addToDo lại có thêm dấu {}
const ToDoForm = ({addToDo, refreshTodo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(value);
        setValue("");
    };
    const reFresh = () => {
        setValue("");
    };
    return (
        <form className="toDoForm">
            <input
                type="text"
                className="todo-input"
                placeholder="What task to do today?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {/* <FontAwesomeIcon icon="fa-solid fa-trash-arrow-up" /> */}

            <button type="submit" className="todo-btn" onClick={handleSubmit}>
                Add Task
            </button>
            <button type="button" className="todo-btn" onClick={reFresh}>
                Delete
            </button>
        </form>
    );
};

export default ToDoForm;
