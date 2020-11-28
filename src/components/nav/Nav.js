import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './nav.css';

import { logOutUser } from '../../redux/actions/authedUser';


class Nav extends Component {
    logOutUser = () => {
        const { dispatch } = this.props
        dispatch(logOutUser())
    }

    render() {
        const { userObj, open, closeNavOnLinkClick } = this.props
        return (
            <div
                className={`nav ${open ? 'nav-open' : 'nav-close'}`}
                onClick={closeNavOnLinkClick}
            >
                <NavLink
                    exact
                    to='/'
                    id='event-target'
                    className='link'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#1f5ed2"
                    }}
                >
                    Home
            </NavLink>

                <NavLink
                    to='/add'
                    id='event-target'
                    className='link'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#1f5ed2"
                    }}
                >
                    New Poll
            </NavLink>

                <NavLink
                    to='/leaderboard'
                    id='event-target'
                    className='link'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#1f5ed2"
                    }}
                >
                    Leader Board
            </NavLink>

                {userObj &&
                    <div className='user'>
                        <p>Hello, {userObj.name}</p>
                        <img className='nav-img' src={userObj.avatarURL} alt={`${userObj.name}`} />
                        <button
                            id='event-target'
                            onClick={this.logOutUser}
                        >
                            Logout</button>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }, { open, closeNavOnLinkClick }) {
    return {
        userObj: users[authedUser],
        open,
        closeNavOnLinkClick
    }
}

export default connect(mapStateToProps)(Nav);