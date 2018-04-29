import React from 'react';
import PropTypes from 'prop-types';
import Close from '../../assets/cancel.svg';
import './Modal.css';

class Modal extends React.Component {

    render() {
        if (this.props.show === false) {
            return null;
        }

        return (
            <div className="Backdrop Backdrop-Animation" onClick={(e)=> {
                if (e.target.classList.contains('Backdrop')) {
                    this.props.onClose();
                }
            }} >
                <div className="Modal Modal-Animation">
                    <div className="Modal-Header">
                        <div className="Modal-Header-Text">{this.props.header}</div>
                        <div className="Modal-Header-Close" onClick={this.props.onClose}>
                            <img src={Close} alt="close"/>
                        </div>
                    </div>
                    <div className="Modal-Content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    header: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;