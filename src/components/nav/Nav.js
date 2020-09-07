import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import './nav.css'

import { logOutUser } from '../../redux/actions/authedUser'


class Nav extends Component {
    logOutUser = () => {
        const { dispatch } = this.props
        dispatch(logOutUser())
    }

    render() {
        const { userObj } = this.props
        return (
            <nav className='nav'>
                <NavLink
                    exact
                    to='/'
                    className='link'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "cornflowerblue"
                    }}
                >
                    Home
            </NavLink>

                <NavLink
                    to='/add'
                    className='link'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "cornflowerblue"
                    }}
                >
                    New Poll
            </NavLink>

                <NavLink
                    to='/leaderboard'
                    className='link'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "cornflowerblue"
                    }}
                >
                    Leader Board
            </NavLink>

                {userObj &&
                    <div className='row user'>
                        <p>Hello, {userObj.name}</p>
                        <img className='nav-img' src={userObj.avatarURL} alt={`${userObj.name}`} />
                        <button onClick={this.logOutUser}>Logout</button>
                    </div>
                }
            </nav>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        userObj: users[authedUser],
    }
}

export default connect(mapStateToProps)(Nav)