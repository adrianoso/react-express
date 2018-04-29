import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../assets/logo.svg';
import PublicNavigation from "../PublicNavigation/PublicNavigation";
import PrivateNavigation from "../PrivateNavigation/PrivateNavigation";

class Header extends React.Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        let header = isAuthenticated? <PrivateNavigation/> : <PublicNavigation/>;
        let logoLink = isAuthenticated? '/dashboard' : '/';

        return (
            <div className="Header">
                <div className="container">
                    <div className="Header-Logo col">
                        <Link to={logoLink}>
                            <img src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="Header-Nav col">
                        {header}
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    auth: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.user
});


export default connect(mapStateToProps, {})(Header);