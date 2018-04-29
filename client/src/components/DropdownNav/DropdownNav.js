import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/authActions';
import exit from '../../assets/exit.svg';
import settings from '../../assets/settings.svg';
import chart from '../../assets/bar-chart.svg';

class DropdownNav extends React.Component {
    render() {
        return (
            <div>
                <div className="Dropdown-Item"
                     onClick={() => {
                         this.props.history.push(`/settings`);
                     }}>
                    <img src={settings} alt="Account settings"/>
                    <span className="Dropdown-Item-Text">Settings</span>
                </div>
                <div className="Dropdown-Item" onClick={() => {
                    this.props.history.push('/statistics');
                }}>
                    <img src={chart} alt="Chart"/>
                    <span className="Dropdown-Item-Text">Statistics</span>
                </div>
                <div className="Dropdown-Item" onClick={() => {
                    this.props.logOut();
                    this.props.history.push('/');
                }}>
                    <img src={exit} alt="Log out"/>
                    <span className="Dropdown-Item-Text">Log Out</span>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, { logOut })(DropdownNav));