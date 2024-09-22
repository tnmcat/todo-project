import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
// check sau tại sao addToDo lại có thêm dấu {}
const EditToDoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(task.id, value);
    };

    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Update Task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {value ? (
                <button type="submit" className="todo-btn">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            ) : null}
        </form>
    );
};

export default EditToDoForm;
