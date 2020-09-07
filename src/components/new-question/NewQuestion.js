import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './new-question.css'

import { handleAddQuestion } from '../../redux/actions/shared'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser, history } = this.props
        const { optionOneText, optionTwoText } = this.state
        dispatch(handleAddQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        }))

        history.push('/')
    }

    render() {
        return (
            <div className='container new-q-container'>
                <h1 className='new-q-heading'>Create New Question</h1>
                <div className='would-you-container'>
                    <p className='new-q-would-you'>Would you rather...</p>
                    <form>
                        <input
                            name='optionOneText'
                            type='text'
                            value={this.state.optionOneText}
                            onChange={this.handleChange}
                            placeholder='Enter Option One Text Here'
                        />

                        <p className='or'>OR</p>

                        <input
                            name='optionTwoText'
                            type='text'
                            value={this.state.optionTwoText}
                            onChange={this.handleChange}
                            placeholder='Enter Option Two Text Here'
                        />
                        <button
                            disabled={!this.state.optionOneText || !this.state.optionTwoText}
                            onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))