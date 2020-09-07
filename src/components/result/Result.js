import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './result.css'


class Result extends Component {
    render() {
        const { question, authedUser, users, id } = this.props
        const userObj = users[authedUser]
        const questionAuthor = users[question.author]
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes

        return (
            <div className='container card result-container'>
                <p className='asked-by'>Asked by {questionAuthor.name}</p>
                <div className='result-details'>
                    <img src={userObj.avatarURL} alt={userObj.name} />
                    <div className='result'>
                        <p className='result-heading'>Results:</p>
                        <div>
                            {userObj.answers[id] === 'optionOne' && <p className='choice'>Your choice <i class="fas fa-heart"></i></p>}
                            <p className='option'>Would you rather {question.optionOne.text}</p>
                            <span className='percent'>{((optionOneVotes / totalVotes) * 100).toFixed(1)}% of people chose this</span>
                            <span className='votes'>{`${optionOneVotes} out of ${totalVotes} votes`}</span>
                        </div>
                        <div>
                            {userObj.answers[id] === 'optionTwo' && <p className='choice'>Your choice <i class="fas fa-heart"></i></p>}
                            <p className='option'>Would you rather {question.optionTwo.text}</p>
                            <span className='percent'>{((optionTwoVotes / totalVotes) * 100).toFixed(1)}% of people chose this</span>
                            <span className='votes'>{`${optionTwoVotes} out of ${totalVotes} votes`}</span>
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