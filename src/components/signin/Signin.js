import React, { Component } from 'react';
import { connect } from 'react-redux'

import './signin.css'

import { setAuthedUser } from '../../redux/actions/authedUser'


class Signin extends Component {
    state = {
        value: ''
    }

    // TODO: To return to last link page clicked before going to signin page

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.dispatch(setAuthedUser(this.state.value))
    }

    render() {
        return (
            <div className='container signin-container'>
                <div className='header'>
                    <h1>Welcome to the Would You Rather App</h1>
                    <span>Please sign in to continue</span>
                </div>

                <select
                    className='select'
                    value={this.state.value
                        ? this.state.value
                        : 'select'
                    }
                    onChange={this.handleChange}
                >
                    <option value="select" disabled>Select user</option>

                    {this.props.usersIds.map(id => (
                        <option key={id} value={id}>{this.props.users[id].name}</option>
                    ))}
                </select>

                <button
                    className='signin-button'
                    disabled={!this.state.value}
                    onClick={this.handleSubmit}
                >
                    Sign in
                        </button>
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