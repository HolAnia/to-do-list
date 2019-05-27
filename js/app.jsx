import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style/main.scss';
import Navigation from './nav.jsx';

class App extends React.Component {
    render() {
        return (
            <>
                <Navigation />
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