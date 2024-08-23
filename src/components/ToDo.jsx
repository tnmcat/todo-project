import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
const ToDo = ({task, toggleComplete, deleteComplete, editTodo, descript}) => {
    const [descriptInput, setdescriptInput] = useState(task.descript);
    const handleDescript = () => {
        setdescriptInput(task.id, descriptInput);
    };
    return (
        <form className="Todo">
            <p
                onClick={() => toggleComplete(task.id)}
                className={`${task.completed ? "completed" : ""}`}
            >
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon
                    icon={faPlus}
                    onClick={handleDescript}
                    style={`${task.descript ? "add_descript" : ""}`}
                />
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editTodo(task.id)}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteComplete(task.id)}
                />
            </div>
        </form>
    );
};

export default ToDo;
