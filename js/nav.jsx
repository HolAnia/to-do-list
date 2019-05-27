import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>Add task</li>
                    <li>list of tasks</li>
                    <li>done</li>
                </ul>
                <h1>My to do list</h1>
            </nav>
        )
    }
}