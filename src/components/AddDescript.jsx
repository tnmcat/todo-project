import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";

const AddDescript = ({descript, task}) => {
    const [value, setValue] = useState(task.description || "");

    const handleDescript = (e) => {
        e.preventDefault();
        console.log("value", value);
        descript(task.id, value);
    };

    return (
        <form className="form-descript" onSubmit={handleDescript}>
            <div className="input-container">
                <input
                    type="text"
                    className="add-description"
                    value={value}
                    placeholder="Add descript"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="todo-btn">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </form>
    );
};

export default AddDescript;
