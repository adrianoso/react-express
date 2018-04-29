import React from 'react';
import './RemoveTask.css';
import { connect } from 'react-redux';
import { hideModal } from "../../actions/modalActions"

class RemoveTask extends React.Component {

    removeTask(e) {
        e.preventDefault();
    }

    closeModal() {
        this.props.hideModal()
    }

    render() {
        return (
            <div className="RemoveTask">
                <form onSubmit={this.removeTask}>
                    <input className="RemoveTask-Submit" type="submit" value="Yes"/>
                    <button className="RemoveTask-Cancel" onClick={this.closeModal.bind(this)}>No</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { hideModal })(RemoveTask);