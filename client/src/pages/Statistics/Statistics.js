import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finished: null,
            all: null
        }
    }

    getDoneTask() {
        axios.get(`/tasks/${this.props.auth.userData.userId}`).then(res => {
            this.setState(res.data)
        })
    }

    componentDidMount() {
        this.getDoneTask()
    }

    render() {
        return (
            <div className="Statistics">
                Statistics:

                <p>Created tasks: {this.state.all}</p>
                <p>Finished tasks: {this.state.finished}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.user
});

export default connect(mapStateToProps, {})(Statistics);