import React from 'react';

export default class Form extends React.Component {

    state = {
        text: '',
        description: '',
        priority: false,
        date: '',
        activity: true,
        dateDone: null,
    }
    hanldeChangeText = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }
    handleChangeDescription = (e) => {
        this.setState({
            description: e.currentTarget.value
        })
    }
    handleChangePriority = (e) => {
        this.setState({
            priority: e.currentTarget.checked
        })
    }
    handleChangeDate = (e) => {
        this.setState({
            date: e.currentTarget.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { text, description, priority, date, activity } = this.state;
        const add = this.props.addTask(text, description, priority, date, activity);
        if (add) {
            this.setState({
                text: '',
                description: '',
                date: '',
            })
        }

    }
    render() {
        return (
            <div className="form">
                <h2>Create task</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Insert task title
                    <input type="text" value={this.state.text} onChange={this.hanldeChangeText} />
                    </label>
                    <label>
                        Task description
                    <textarea name="" id="" cols="30" rows="10" value={this.state.description} onChange={this.handleChangeDescription}></textarea>
                    </label>
                    <label htmlFor="">
                        priority
                    <input type="checkbox" checked={this.state.priority} onChange={this.handleChangePriority} />
                    </label>
                    <label>
                        deadline
                    <input type="date" value={this.state.date} onChange={this.handleChangeDate} />
                    </label>
                    <button type="submit" >Add</button>
                </form>
            </div>
        )
    }
}