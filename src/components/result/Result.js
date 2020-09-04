import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './result.css'

import Avatar from '../avatar/Avatar';


class Result extends Component {
    render() {
        const { question, authedUser, users, id } = this.props
        const user = users[authedUser]
        const questionAuthor = users[question.author]
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        
        return (
            <div className='result-container'>
                <p>Asked by {questionAuthor.name}</p>
                <div className='result-details'>
                    <Avatar source={questionAuthor.avatarURL} />
                    <div className='result'>
                        <p>Results:</p>
                        <div>
                            {user.answers[id] === 'optionOne' && <p>You chose this option</p>}
                            <p>Would you rather {question.optionOne.text}</p>
                            <span>{((optionOneVotes / totalVotes) * 100).toFixed(1)}% of people chose this</span>
                            <span>{`${optionOneVotes} out of ${totalVotes} votes`}</span>
                        </div>
                        <div>
                            {user.answers[id] === 'optionTwo' && <p>You chose this option</p>}
                            <p>Would you rather {question.optionTwo.text}</p>
                            <span>{((optionTwoVotes / totalVotes) * 100).toFixed(1)}% of people chose this</span>
                            <span>{`${optionTwoVotes} out of ${totalVotes} votes`}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params
    const question = questions[id]
    return {
        question,
        authedUser,
        users,
        id
    }
}

export default withRouter(connect(mapStateToProps)(Result))