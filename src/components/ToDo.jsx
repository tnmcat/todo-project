import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faPenToSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";
const ToDo = ({
    task,
    toggleComplete,
    deleteComplete,
    editTodo,
    descript,
    priorityTask,
}) => {
    const [isMdOpen, setMdOpen] = useState(false);
    const [isRadio, setIsRadio] = useState(task.completed);
    const [selectedStar, setSelectedStar] = useState(null);
    const handleDelete = () => {
        setMdOpen(true);
    };
    const confirmDelete = () => {
        deleteComplete(task.id);
        setMdOpen(false);
    };
    const closeMd = () => {
        setMdOpen(false);
    };
    const handleRadioClick = () => {
        const newStatus = !isRadio;
        setIsRadio(newStatus);
        toggleComplete(task.id, newStatus);
    };
    const handleStarClick = (id) => {
        setSelectedStar(id);
        priorityTask(id);
    };
    return (
        <form className="Todo">
            <input
                type="radio"
                checked={isRadio}
                onChange={handleRadioClick}
                value={task.id}
            />
            <label>
                <h3 className={`${task.completed ? "completed" : ""}`}>
                    {task.task}
                </h3>
                <p>{task.description}</p>
            </label>
            <div>
                <FontAwesomeIcon
                    icon={
                        selectedStar === task.id ? faStarSolid : faStarRegular
                    }
                    className="star-icon"
                    onClick={() => handleStarClick(task.id)}
                />
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => descript(task.id)}
                />
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editTodo(task.id)}
                />
                {
                    <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDelete(task.id)}
                    />
                }
                <ReactModal
                    isOpen={isMdOpen}
                    onRequestClose={closeMd}
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <div className="modal-header">
                        <span className="modal-icon">⚠️</span>
                        Are you sure you want to delete?
                    </div>
                    <h2 className="task-title">{task.task}</h2>
                    <div className="button-container">
                        <button
                            className="modal-button confirm"
                            onClick={confirmDelete}
                        >
                            Confirm
                        </button>
                        <button className="modal-button" onClick={closeMd}>
                            Cancel
                        </button>
                    </div>
                </ReactModal>
            </div>
        </form>
    );
};

export default ToDo;
