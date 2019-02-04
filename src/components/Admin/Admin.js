import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm.js';
import AdminDelete from './AdminDelete';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Projects from '../Projects/Projects.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

{/* <Paper className={classes.root}>
    <Table >
        <TableHead>
            <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell align="right">Delete</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
    </Table>
</Paper> */}

class Admin extends Component {
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
                <br />
                <br />
                <div>
                    <Paper >
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Project Name</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxStore.projects.map((project) => {
                                    return <AdminDelete key={project.id} project={project} />
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                {/* <div>
                    <table className="projectTable">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.reduxStore.projects.map((project) => {
                                return <AdminDelete key={project.id} project={project} />
                            })}
                        </tbody>
                    </table>
                </div> */}
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapReduxStoreToProps)(Admin);