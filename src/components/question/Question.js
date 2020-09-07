import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import './question.css'

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
        const { selectedRadio } = this.state
        const questionAuthorObj = users[questions[id].author]
        const { avatarURL, name } = questionAuthorObj

        return (
            // User shouldn't be able to re-answer questions
            // If a question has been answered and user goes back to question page from the results page, redirect to home

            users[authedUser].answers.hasOwnProperty(id)
                ? <Redirect to='/' />
                : (
                    <div className='container card question-container'>
                        <p className='asked-by'>{questionAuthorObj.name} asks:</p>
                        <div className='question-details'>
                            <img src={avatarURL} alt={name} />
                            <div className='would-you'>
                                <p>Would You Rather</p>
                                <label>
                                    <input
                                        className='option-one'
                                        type="radio"
                                        name=""
                                        value='optionOne'
                                        checked={selectedRadio === 'optionOne'}
                                        onChange={this.handleChange}
                                    />
                                    {questions[id].optionOne.text}
                                </label>
                                <br />
                                <label>
                                    <input
                                        className='option-two'
                                        type="radio"
                                        value='optionTwo'
                                        checked={selectedRadio === 'optionTwo'}
                                        onChange={this.handleChange}
                                    />
                                    {questions[id].optionTwo.text}
                                </label><br />

                                <button
                                    disabled={!selectedRadio}
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