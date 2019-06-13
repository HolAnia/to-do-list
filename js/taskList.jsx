import React from 'react';
import Task from './task.jsx';


const TaskList = (props) => {
    const done = props.tasks.filter(task => !task.activity);
    const active = props.tasks.filter(task => task.activity);


    const activeTasks = active.map(task => <Task key={task.id} task={task} doneTask={props.doneTask} deleteTask={props.deleteTask} />);
    const doneTasks = done.map(task => <Task key={task.id} task={task} doneTask={props.doneTask} deleteTask={props.deleteTask} />);

    return (
        <>
            <div className="active">
                <h2>Tasks list:</h2>
                {activeTasks.length > 0 ? <ul>{activeTasks}</ul> : <span> Nie masz rzadnych zadań do zrobienia? </span>}

            </div>
            <div className="done">
                <h2>Done tasks <em>({doneTasks.length})</em>:</h2>
                <ul>{doneTasks}</ul>

            </div>
        </>
    )
}

export default TaskList;