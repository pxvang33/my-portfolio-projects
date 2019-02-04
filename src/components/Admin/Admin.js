import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Projects from '../Projects/Projects.js'




class Admin extends Component {
    // componentDidMount() {
    //     this.getProjects();
    // }
    // getProjects = () => {
    //     let action = { type: 'GET_PROJECTS' }
    //     this.props.dispatch(action)
    // }

    render() {
        return (
            <div>
            <Router>
                <div>
                <div>
                    <Link to="/">back to Projects</Link>
                    </div>
                    <Route exact path="/" component={Projects} />

                    </div>
            </Router>
            <div>
                <h2>Admin</h2>
                <AdminForm />
            </div>
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapReduxStoreToProps)(Admin);