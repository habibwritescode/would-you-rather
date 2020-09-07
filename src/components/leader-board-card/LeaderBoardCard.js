import React from 'react';
import { connect } from 'react-redux';

import './leader-board-card.css'


function LeaderBoardCard(props) {
    const { users, id } = props
    const userObj = users[id]
    return (
        <li className='container leader'>
            <div className='leaderboard-container'>
                <img src={userObj.avatarURL} alt={userObj.name} />
                <div className='lead-user'>
                    <p>{userObj.name}</p>
                    <p>Answered questions <span>{Object.keys(userObj.answers).length}</span></p>
                    <p>Created questions <span>{userObj.questions.length}</span></p>
                </div>
                <div className='lead-score'>
                    <h3>Score</h3>
                    <span>{Object.keys(userObj.answers).length + userObj.questions.length}</span>
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