import React from 'react';
import './PrivateNavigation.css';
import { connect } from 'react-redux';
import { logOut } from '../../actions/authActions';
import { showModal} from "../../actions/modalActions";
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownNav from '../DropdownNav/DropdownNav';
import plus from '../../assets/plus.svg';
import settings from '../../assets/settings.svg';

class PrivateNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        this.props.logOut();
    }

    openModal(type, title) {
        this.props.showModal(type, title)
    }

    render () {
        return (
            <ul className="PrivateNavigation">
                <li>
                    <img src={plus}
                         alt="add task"
                         onClick={() => { this.openModal('add-task', 'Add task') }}/>
                </li>
                <li>
                    <Dropdown header={
                        <img src={settings}
                             alt="menu" />
                    }>
                        <DropdownNav></DropdownNav>
                    </Dropdown>
                </li>
            </ul>
        )
    }
}

export default connect(null, { showModal, logOut })(PrivateNavigation);