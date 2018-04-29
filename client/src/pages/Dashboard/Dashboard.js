import React from 'react';
import { connect } from 'react-redux';
import Task from '../../components/Task/Task';
import TaskBoard from '../../components/TaskBoard/TaskBoard';
import { fetchTasks } from '../../actions/taskActions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    componentWillMount() {
        this.props.fetchTasks()
    }

    render() {
        let list = (this.props.taskData.count > 0)? (
            this.props.taskData.tasks.map( task => {
                return <Task key={task._id} data={task}/>
            })
        ) : ( <p>All done</p> );

        return (
            <div className="Dashboard">
                <TaskBoard children={list}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    taskData: state.tasks
});

export default connect(mapStateToProps, { fetchTasks })(Dashboard);
