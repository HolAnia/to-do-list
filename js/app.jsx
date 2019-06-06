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

    addTask = (text, description, priority, date) => {
        console.log("dodano task z formsa")
        const newTask = {
            id: this.counter,
            title: text,
            description,
            priority,
            date
        }
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
        this.counter++;
        return true;
    }
    render() {

        return (
            <>
                <Navigation />
                <Form addTask={this.addTask} />
                <TaskList tasks={this.state.tasks} />
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