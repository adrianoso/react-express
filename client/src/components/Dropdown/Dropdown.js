import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/authActions';

class Dropdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showDropdown: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    toggleDropdown() {
        if (!this.state.showDropdown) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown,
        }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }

        this.toggleDropdown();
    }

    render() {
        let content = this.state.showDropdown? (
            <div className="Dropdown-Content">
                {this.props.children}
            </div>
        ) : null;

        return (
            <div className="Dropdown"  ref={ node => { this.node=node }}
                 onClick={this.toggleDropdown}>
                {this.props.header}
                {content}
            </div>
        )
    }
}

Dropdown.propTypes = {
    children: PropTypes.node
};

export default withRouter(connect(null, { logOut })(Dropdown));