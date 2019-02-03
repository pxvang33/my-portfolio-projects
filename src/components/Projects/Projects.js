import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard.js';



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
                {/* {JSON.stringify(this.props.reduxStore)} */}
                {this.props.reduxStore.projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapReduxStoreToProps)(Projects);