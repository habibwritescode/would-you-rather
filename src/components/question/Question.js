import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import './question.css'

import Avatar from '../avatar/Avatar';
import { handleAddQuestionAnswer } from '../../redux/actions/shared'


class Question extends Component {
    state = {
        selectedRadio: ''
    }

    handleChange = (e) => {
        this.setState({
            selectedRadio: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, authedUser, id, history } = this.props
        const { selectedRadio } = this.state
        dispatch(handleAddQuestionAnswer({
            authedUser,
            qid: id,
            answer: selectedRadio
        }))

        history.push(`/result/${id}`)
    }

    render() {
        const { id, questions, users, authedUser } = this.props
        const questionAuthor = users[questions[id].author]
        const question = questions[id]
        
        if (question === null) {
            return <p>This Question doesn't exist</p>
        }

        return (
            users[authedUser].answers.hasOwnProperty(id) ?
                <Redirect to='/' /> :
                (
                    <div className='question-container'>
                        <p>{questionAuthor.name} asks:</p>
                        <div className='question-details'>
                            <Avatar source={questionAuthor.avatarURL} />
                            <div className='would-you'>
                                <p>Would You Rather</p>
                                <label>
                                    <input
                                        type="radio"
                                        name=""
                                        value='optionOne'
                                        checked={this.state.selectedRadio === 'optionOne'}
                                        onChange={this.handleChange}
                                    />
                                    {questions[id].optionOne.text}
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        value='optionTwo'
                                        checked={this.state.selectedRadio === 'optionTwo'}
                                        onChange={this.handleChange}
                                    />
                                    {questions[id].optionTwo.text}
                                </label><br />

                                <button
                                    disabled={!this.state.selectedRadio}
                                    onClick={this.handleSubmit}
                                >Submit</button>

                            </div>
                        </div>
                    </div>
                )
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params
    return {
        authedUser,
        id,
        questions,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Question))