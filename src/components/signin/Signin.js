import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { useHistory, useLocation } from 'react-router-dom'

import './signin.css'

import { setAuthedUser } from '../../redux/actions/authedUser'


class Signin extends Component {
    state = {
        value: ''
    }
    
    // To return to last link page clicked before going to signin page

    // let history = useHistory();
    // let location = useLocation();

    // let { from } = location.state || { from: { pathname: "/" } };
    // let login = () => {
    //     fakeAuth.authenticate(() => {
    //         history.replace(from);
    //     });
    // };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = () => {
        // const { history, location } = this.props
        // console.log('location', location)
        // let { from } = location.state || { from: { pathname: "/" } };
        this.props.dispatch(setAuthedUser(this.state.value))
        // .then(() => history.replace(from))
        // history.replace(from);
    }

    render() {
        return (
            <div className='signin-container'>
                <div className='header'>
                    <h3>Welcome to the Would You Rather App</h3>
                    <span>Please sign in to continue</span>
                </div>

                <select
                    value={this.state.value ? this.state.value : 'select'}
                    onChange={this.handleChange}
                >
                    <option value="select" disabled>Select user</option>
                    {this.props.usersIds.map(id => (
                        <option key={id} value={id}>{this.props.users[id].name}</option>
                    ))}
                </select>
                <button
                    disabled={!this.state.value}
                    onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        usersIds: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Signin)