import React from 'react';
import Task from './task.jsx';

const TaskList = (props) => {
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} />)

    return (
        <>
            <div className="active">
                <h2>Tasks list:</h2>
                {tasks}
            </div>
            <div className="done">
                <h2>Done tasks:</h2>

            </div>
        </>
    )
}

export default TaskList;