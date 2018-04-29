import React from 'react';
import './AddComment.css';
import { connect } from 'react-redux';
import { addComment } from "../../actions/taskActions";
import cancel from '../../assets/cancel.png';
import edit from '../../assets/edit.png';

class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    addComment(e) {
        e.preventDefault();
        if(this.state.comment.length > 3) {
            this.props.addComment(this.props.taskId, this.state).then(() => {
                this.props.onClick();
            });
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentWillMount() {
        this.props.tasks.tasks.map(item => {
            if(item._id === this.props.taskId) {
                this.setState({
                    comment: item.comment
                });
            }
        })
    }

    render() {
        return (
            <div className="AddComment">
                <form onSubmit={this.addComment.bind(this)}>
                    <textarea onChange={this.handleChange}
                              name="comment"
                              className="AddComment-Textarea"
                              placeholder="Add comment here..."
                              value={this.state.comment}> </textarea>
                    <div className="AddComment-Buttons">
                        <button className="AddComment-Submit" type="submit">
                            <img src={edit} />
                        </button>
                        <img src={cancel} alt="Cancel" onClick={this.props.onClick}/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, { addComment })(AddComment);