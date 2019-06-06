import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style/main.scss';
import Navigation from './nav.jsx';
import TaskList from './taskList.jsx';
import Form from './form.jsx';

class App extends React.Component {
    state = {
        tasks: [],
    }
    addTask = () => {
        console.log("dodano task z formsa")
        return true;
    }
    render() {
        return (
            <>
                <Navigation />
                <Form addTask={this.addTask} />
                <TaskList />
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