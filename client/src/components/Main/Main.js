import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from "../../pages/Dashboard/Dashboard";
import Settings from "../../pages/Settings/Settings";
import PublicLayout from "../../pages/PublicLayout/PublicLayout";
import Statistics from "../../pages/Statistics/Statistics";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

class Main extends React.Component {
    render() {

        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={PublicLayout}/>
                    <PrivateRoute authed={this.props.auth.isAuthenticated} path='/dashboard' component={Dashboard} />
                    <PrivateRoute authed={this.props.auth.isAuthenticated} path='/settings' component={Settings} />
                    <PrivateRoute authed={this.props.auth.isAuthenticated} path='/statistics' component={Statistics} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.user
});

export default withRouter(connect(mapStateToProps, {})(Main));