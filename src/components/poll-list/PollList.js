import React, { Component } from 'react';
import { connect } from 'react-redux'

import './polllist.css'

import Poll from '../poll/Poll'


class PollList extends Component {
    state = {
        ids: this.props.unAnswered
    }

    render() {
        return (
            <div className='polllist-container' >
                <div className='questions'>
                    <p onClick={() => this.setState({
                        ids: this.props.unAnswered
                    })}>Unanswered Questions</p>
                    <p onClick={() => this.setState({
                        ids: this.props.answered
                    })}>Answered Questions</p>
                </div>
                <ul>
                    {this.state.ids.map(id => (
                        <Poll key={id} id={id} />
                    )
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const sortIds = Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const user = users[authedUser]
    return {
        unAnswered: sortIds.filter(id => user.answers.hasOwnProperty(id) === false),
        sortIds: sortIds,
        user,
        id: sortIds[0],
        answered: sortIds.filter(id => user.answers.hasOwnProperty(id) === true),
        users,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(PollList)