import React from 'react';
import './Task.css';
import Dropdown from '../Dropdown/Dropdown';
import DropdownTask from "../DropdownTask/DropdownTask";
import AddComment from '../AddComment/AddComment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal} from "../../actions/modalActions";
import { finishTask , removeTask } from "../../actions/taskActions";
import tick from '../../assets/tick.svg';
import more from '../../assets/more.svg';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleComment: false,
            editComment: false
        };

        this.finishTask = this.finishTask.bind(this);
        this.closeArea = this.closeArea.bind(this);
        this.showComment = this.showComment.bind(this);

        this.addComment = this.addComment.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    showComment() {
        if(!this.state.editComment) {
            this.setState({visibleComment: !this.state.visibleComment})
        }
    }

    finishTask() {
        this.props.finishTask(this.props.data._id, { finished: true });
    }

    addComment() {
        this.setState({
            editComment: true,
            visibleComment: false
        })
    }

    editTask() {
        console.log('edit');
    }

    deleteTask() {
        this.props.removeTask(this.props.data._id);
    }

    closeArea() {
        this.setState({
            editComment: false
        })
    }

    render() {
        const { name , date , comment } = this.props.data;
        let editComment = (this.state.editComment)? (<AddComment taskId={this.props.data._id} onClick={this.closeArea}/>) : null;
        let showComment = (this.state.visibleComment)? (<div className="showComment">{comment}</div>) : null;

        return (
            <div className="Task">
                <div className="Task-Circle">
                    <div className="Task-Circle-Inner">
                        <img src={tick} alt="mark" onClick={this.finishTask}/>
                    </div>
                </div>
                <div className="Task-Name">
                    <p onClick={this.showComment}>{name}</p>
                    {showComment}
                    {editComment}
                </div>
                <div className="Task-Date">{date.split('-').reverse().join('-')}</div>
                <div className="Task-Menu">
                    <Dropdown header={
                        <img src={more} alt="comment" onClick={this.props.onClick}/>
                    }>
                        <DropdownTask addComment={this.addComment}
                                      editTask={this.editTask}
                                      removeTask={this.deleteTask}/>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

Task.propTypes = {
    onClick: PropTypes.func
};

export default connect(null, { finishTask, removeTask, showModal })(Task);

// () => {
    // this.removeTask('remove-task', 'Are you sure you want to remove this task?')

// }