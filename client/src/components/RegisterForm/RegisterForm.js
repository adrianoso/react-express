import React from 'react';
import './RegisterForm.css';
import { connect } from 'react-redux';
import { createUser } from '../../actions/authActions';
import unlocked from '../../assets/unlocked2.svg';
import locked from '../../assets/locked.svg';
import mail from '../../assets/mail.svg';

class RegisterForm extends React.Component {
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
        this.props.createUser(this.state.form)
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
            <form className="RegisterForm" onSubmit={this.handleSubmit}>
                <label>
                    <input className="RegisterForm-TextInput"
                           placeholder="Enter email address"
                           type="text" name="email"
                           value={this.state.email}
                           onChange={this.handleChange} />
                    <img className="icon" src={mail} alt="Email address"/>
                </label>
                <label>
                    <input className="RegisterForm-TextInput"
                           placeholder="Enter password"
                           type={showPassword.type}
                           name="password"
                           value={this.state.password}
                           onChange={this.handleChange} />
                    <img className="icon" src={showPassword.icon} onClick={this.togglePassword} alt="Show password"/>
                </label>
                <input className="RegisterForm-Submit" type="submit" value="Submit" />
            </form>
        );
    }
}

export default connect(null, { createUser })(RegisterForm);