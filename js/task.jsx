import React from 'react';

const Task = (props) => {
    const { title, description, date } = props.task;
    return (
        <div className="task">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date}</p>
            <button className="rename" onClick={() => console.log("zmiana")} >change</button>
            <button className="delete" onClick={() => console.log('delete')} >X</button>
        </div>
    )
}

export default Task