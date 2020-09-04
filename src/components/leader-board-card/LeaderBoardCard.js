import React from 'react';
import { connect } from 'react-redux';

import './leader-board-card.css'

import Avatar from '../avatar/Avatar';


function LeaderBoardCard(props) {
    const { users, id } = props
    const user = users[id]
    return (
        <li>
            <div>
                <Avatar source={user.avatarURL} />
                <div>
                    <h1>{user.name}</h1>
                    <p>Answered questions {Object.keys(user.answers).length}</p>
                    <p>Created questions {user.questions.length}</p>
                </div>
                <div>
                    <h3>Score</h3>
                    <span>Score is {Object.keys(user.answers).length + user.questions.length}</span>
                </div>
            </div>
        </li>
    )
}

function mapStateToProps({ users }, { id }) {
    return {
        users,
        id
    }
}

export default connect(mapStateToProps)(LeaderBoardCard)