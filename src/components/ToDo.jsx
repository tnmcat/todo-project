import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faPenToSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({task, toggleComplete, deleteComplete, editTodo, descript}) => {
    return (
        <form className="Todo">
            <div>
                <h3
                    onClick={() => toggleComplete(task.id)}
                    className={`${task.completed ? "completed" : ""}`}
                >
                    {task.task}
                </h3>
                <p>{task.description}</p>
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => descript(task.id)} // Gọi hàm `descript` khi bấm faPlus
                />
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editTodo(task.id)} // Gọi hàm `editTodo` khi bấm faPenToSquare
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteComplete(task.id)} // Xóa task khi bấm faTrash
                />
            </div>
        </form>
    );
};

export default ToDo;
