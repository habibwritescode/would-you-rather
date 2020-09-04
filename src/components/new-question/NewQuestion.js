import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
            <div>
                <h1>Create New Question</h1>
                <p>Would you rather...</p>
                <form>
                    <input
                        name='optionOneText'
                        type='text'
                        value={this.state.optionOneText}
                        onChange={this.handleChange}
                    />

                    <p>OR</p>

                    <input
                        name='optionTwoText'
                        type='text'
                        value={this.state.optionTwoText}
                        onChange={this.handleChange}
                    />
                    <button
                        disabled={!this.state.optionOneText || !this.state.optionTwoText}
                        onClick={this.handleSubmit}>Submit</button>
                </form>
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