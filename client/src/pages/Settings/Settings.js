import React from 'react';
import './Settings.css';
import { connect } from 'react-redux';

class Settings extends React.Component {
    render() {
        const { userData } = this.props.auth;
        return (
            <div className="Settings">
                <div className="Settings-Account">
                    <p>Username: {userData.email}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.user
});

export default connect(mapStateToProps, {})(Settings);