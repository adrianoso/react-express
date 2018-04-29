import React from 'react';
import './SingleInput.css';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
    <div className="SingleInput">
        <label className="SingleInput-Label">{props.title}</label>
        <input
            className="SingleInput-Input"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder} />
    </div>
);

SingleInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
};

export default SingleInput;