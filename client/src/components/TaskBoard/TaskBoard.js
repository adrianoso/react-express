import React from 'react';
import PropTypes from 'prop-types';
import './TaskBoard.css';

function TaskBoard({children}) {

    return (
        <div className="TaskBoard">
            <div className="TaskBoard-Header">
                <div className="TaskBoard-Header-Left">
                    <span>Your tasks:</span>
                </div>
                <div className="TaskBoard-Header-Right">
                    <span className="active">Today</span>
                    <span>Next 7 days</span>
                </div>
            </div>
            <div className="TaskBoard-Content">
                {children}
            </div>
        </div>
    )
}

TaskBoard.propTypes = {
    children: PropTypes.node
};

export default TaskBoard;