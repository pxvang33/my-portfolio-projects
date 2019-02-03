import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
    componentDidMount() {
        this.getProjects();
    }
    getProjects = () => {
        let action = { type: 'GET_PROJECTS' }
        this.props.dispatch(action)
    }

    render() {
        return (
            <div>
                <h2>Projects go below</h2>
                {JSON.stringify(this.props.reduxStore)}

            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapReduxStoreToProps)(Projects);