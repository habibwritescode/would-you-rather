import React from 'react';
import { connect } from 'react-redux'

import LeaderBoardCard from '../components/leader-board-card/LeaderBoardCard';


function LeaderBoardPage(props) {
    return (
        <ul>
            {props.sortIds.map(id => (
                <LeaderBoardCard key={id} id={id} />
            ))}
        </ul>
    )
}

function mapStateToProps({ users }) {
    const sortIds = Object.keys(users).sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    return {
        sortIds
    }
}

export default connect(mapStateToProps)(LeaderBoardPage)