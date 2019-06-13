import React from 'react';

const Task = (props) => {
    const { title, description, date, id } = props.task;
    return (
        <li className="task">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date}</p>
            <button className="rename" onClick={() => props.doneTask(id)} >done</button>
            <button className="delete" onClick={() => props.deleteTask(id)} >X</button>
        </li>
    )
}

export default Task