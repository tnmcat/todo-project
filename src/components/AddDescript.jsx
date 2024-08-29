import React, {useState} from "react";

const AddDescript = ({descript, task}) => {
    const [value, setValue] = useState(task.description || "");

    const handleDescript = (e) => {
        e.preventDefault();
        console.log("value", value);
        descript(task.id, value);
    };

    return (
        <form action="toDoForm" onSubmit={handleDescript}>
            <input
                type="text"
                className="todo-input"
                value={value}
                placeholder="Add descript"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">
                Add Descript
            </button>
        </form>
    );
};

export default AddDescript;
