import React from 'react';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import { hideModal } from "../../actions/modalActions";
import { clearError } from "../../actions/authActions";
import SignInForm from '../SignInForm/SignInForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import AddTask from "../AddTask/AddTask";
import RemoveTask from "../RemoveTask/RemoveTask";

class ModalWrapper extends React.Component {

    renderModal = (type) => {
        switch (type) {
            case "sign-in":
                return <SignInForm/>;
            case "register":
                return <RegisterForm/>;
            case "add-task":
                return <AddTask/>;
            case "remove-task":
                return <RemoveTask/>;
            default:
                return null;
        }
    };

    toggleModal = () => {
        this.props.hideModal();
        this.props.clearError();
    };

    render() {
        return (
            <Modal header={this.props.modal.title}
                   show={this.props.modal.showModal}
                   onClose={this.toggleModal}>
                {this.renderModal(this.props.modal.type)}
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modal
});

export default connect(mapStateToProps, { hideModal, clearError })(ModalWrapper);

