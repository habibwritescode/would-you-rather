import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './poll.css'


class Poll extends Component {
    viewResult = (e) => {
        const { id, history } = this.props
        e.preventDefault()
        history.push(`/result/${id}`)
    }

    viewPoll = () => {
        const { id, history } = this.props
        history.push(`/question/${id}`)
    }

    render() {
        const { questionObj, userObj, users, id } = this.props
        const { author, optionOne } = questionObj
        const { name, avatarURL } = users[author]
        return (
            <div className='card poll-container'>
                <p className='asked-by'>{name} asks:</p>
                <div className='details'>
                    <img src={avatarURL} alt={name} />
                    <div className='would-you'>
                        <p>Would you rather</p>
                        <p>...{optionOne.text}...</p>
                        {userObj.answers.hasOwnProperty(id) ?
                            <button className='poll-btn' onClick={this.viewResult}>View Result</button> :
                            <button className='poll-btn' onClick={this.viewPoll}>View Poll</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const questionObj = questions[id]
    const userObj = users[authedUser]
    return {
        questionObj,
        users,
        userObj,
        id
    }
}

export default withRouter(connect(mapStateToProps)(Poll))