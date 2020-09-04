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
        const { author, optionOne } = this.props.question
        const { name, avatarURL } = this.props.users[author]
        return (
            <div className='poll-container'>
                <p>{name} asks:</p>
                <div className='details'>
                    <img className='avatar' src={avatarURL} alt='' />
                    <div className='would-you'>
                        <p>Would you rather</p>
                        <p>{optionOne.text}...</p>
                        {this.props.user.answers.hasOwnProperty(this.props.id) ?
                            <button onClick={this.viewResult}>View Result</button> :
                            <button onClick={this.viewPoll} className='btn'>View Poll</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const user = users[authedUser]
    return {
        question,
        users,
        user,
        id
    }
}

export default withRouter(connect(mapStateToProps)(Poll))