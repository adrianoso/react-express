import React from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        let classFix = isAuthenticated? 'Home-Dashboard' : '';

        return (
            <div className="Home">
                <div className={classFix}>
                    <div className="container">
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.user
});

export default connect(mapStateToProps, {})(Home);