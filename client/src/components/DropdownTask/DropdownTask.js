import React from 'react';

class DropdownTask extends React.Component {

    render() {
        return (
            <div>
                <div className="Dropdown-Item" onClick={this.props.editTask}>
                    <span>Edit</span>
                </div>
                <div className="Dropdown-Item" onClick={this.props.addComment}>
                    <span>Add comment</span>
                </div>
                <div className="Dropdown-Item" onClick={this.props.removeTask}>
                    <span>Remove</span>
                </div>
            </div>
        )
    }
}

export default DropdownTask;