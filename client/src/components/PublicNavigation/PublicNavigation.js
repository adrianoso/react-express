import React from 'react';
import './PublicNavigation.css';
import { connect } from 'react-redux';
import { showModal} from "../../actions/modalActions";

class PublicNavigation extends React.Component {

    openModal(type, title) {
        this.props.showModal(type, title)
    }

    render() {
        return (
            <ul className="PublicNavigation">
                <li onClick={() => { this.openModal('sign-in', 'Sign in into service') }}>Sign in</li>
                <li onClick={() => { this.openModal('register', 'Create account') }} >Register</li>
            </ul>
        )
    }
}

export default connect(null, { showModal })(PublicNavigation);