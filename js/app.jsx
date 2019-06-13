import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style/main.scss';
import Navigation from './nav.jsx';
import TaskList from './taskList.jsx';
import Form from './form.jsx';


class App extends React.Component {
    counter = 0;
    state = {
        tasks: [],
    }

    addTask = (text, description, priority, date, activity, dateDone) => {
        console.log("dodano task z formsa")
        const newTask = {
            id: this.counter,
            title: text,
            description,
            priority,
            date,
            activity,
            dateDone: null,
        }
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
        this.counter++;
        return true;
    }
    doneTask = (id) => {
        console.log(`zmiana elementu o id ${id}`);
        let tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                task.activity = false;
                task.dateDone = new Date().getTime();
            }
        })
        this.setState({
            tasks,
        })
    }
    deleteTask = (id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id);
        this.setState({
            tasks
        })

    }
    render() {

        return (
            <>
                <Navigation />
                <Form addTask={this.addTask} />
                <TaskList tasks={this.state.tasks} doneTask={this.doneTask} deleteTask={this.deleteTask} />
            </>
        )

    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});