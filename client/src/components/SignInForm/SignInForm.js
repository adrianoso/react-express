import React from 'react';
import './SignInForm.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../actions/authActions';
import { hideModal } from '../../actions/modalActions';
import unlocked from '../../assets/unlocked2.svg';
import locked from '../../assets/locked.svg';
import mail from '../../assets/mail.svg';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            form: {
                email: '',
                password: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
    }

    handleChange(event) {
        this.setState({ form: { ...this.state.form, [event.target.name]: event.target.value} });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logIn(this.state.form).then(
            () => {
                if(this.props.auth.isAuthenticated) {
                    this.props.hideModal();
                    this.props.history.push(`/dashboard`);
                }
            }
        )
    }

    togglePassword() {
        this.setState({ showPassword: !this.state.showPassword});
    }

    render() {
        let showPassword = (this.state.showPassword)? {
            type: "text",
            icon: unlocked
        } : {
            type: "password",
            icon: locked
        };

        return (
            <form className="SignInForm" onSubmit={this.handleSubmit}>
                <label>
                    <input className="SignInForm-TextInput"
                           placeholder="Enter email address"
                           type="text" name="email"
                           value={this.state.email}
                           onChange={this.handleChange} />
                    <img className="icon" src={mail} alt="Email address"/>
                </label>
                <label>
                    <input className="SignInForm-TextInput"
                           placeholder="Enter password"
                           type={showPassword.type}
                           name="password"
                           value={this.state.password}
                           onChange={this.handleChange} />
                    <img className="icon" src={showPassword.icon} onClick={this.togglePassword} alt="Show password"/>
                </label>
                <div className="SignInForm-Box">
                    <a href="#">Forgot password?</a>
                </div>
                <input className="SignInForm-Submit" type="submit" value="Submit" />
                <p className="SignInForm-Error">{this.props.auth.error.message}</p>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.user
});

export default withRouter(connect(mapStateToProps, { logIn, hideModal })(SignInForm));