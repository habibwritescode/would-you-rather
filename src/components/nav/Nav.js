import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import './nav.css'

import Avatar from '../avatar/Avatar';
import { logOutUser } from '../../redux/actions/authedUser'


class Nav extends Component {
    logOutUser = () => {
        const { dispatch } = this.props
        dispatch(logOutUser())
    }

    render() {
        return (
            <nav className='row'>
                <NavLink
                    exact
                    to='/'
                    className='link'
                >
                    Home
            </NavLink>

                <NavLink
                    to='/add'
                    className='link'
                >
                    New Poll
            </NavLink>

                <NavLink
                    to='/leaderboard'
                    className='link'
                >
                    Leader Board
            </NavLink>

                {this.props.user &&
                    <div className='row user'>
                        <p>Hello, {this.props.user.name}</p>
                        <Avatar source={this.props.user.avatarURL} />
                        <div onClick={this.logOutUser}>Logout</div>
                    </div>
                }
            </nav>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        user: users[authedUser],
    }
}

export default connect(mapStateToProps)(Nav)