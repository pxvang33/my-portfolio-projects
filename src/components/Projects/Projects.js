import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {

    render() {
        return (
            <div>
                <h2>Projects go below</h2>

            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapReduxStoreToProps)(Projects);