import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className="Button"
                type={props.type || 'submit'}
                onClick={props.onClick}>
            {props.children}
        </button>
    )
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default Button;