import React from 'react';
import './AddTask.css';
import { connect } from 'react-redux';
import { addTask } from "../../actions/taskActions";
import { hideModal } from "../../actions/modalActions";

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            date: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    createTask(event) {
        event.preventDefault();
        this.props.addTask(this.state).then(
            (res) => { this.props.hideModal() },
            (err) => { console.log('error') }
        )
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        let today = new Date().toISOString().split('T')[0];
        return (
            <div className="AddTask">
                <form onSubmit={this.createTask}>
                    <label>
                        <input className="AddTask-TextInput"
                               placeholder="Type task name..."
                               type="text" name="name"
                               value={this.state.task}
                               onChange={this.handleChange} />
                    </label>
                    <label>
                        <input className="AddTask-TextInput" type="date" name="date" min={today} onChange={this.handleChange} />
                    </label>
                    <input className="AddTask-Submit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.user
});

export default connect( mapStateToProps, { addTask, hideModal })(AddTask);