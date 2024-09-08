import {faCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
            <div className="input-container">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="What task to do today?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {value && (
                    <div>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="clear-icon"
                            onClick={reFresh}
                        />
                    </div>
                )}
            </div>
            {value ? (
                <button
                    type="submit"
                    className="submit-icon"
                    onClick={handleSubmit}
                >
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            ) : null}
        </form>
    );
};

export default ToDoForm;
