import React, { Component } from 'react';
import { connect } from 'react-redux'

import './polllist.css'

import Poll from '../poll/Poll'


class PollList extends Component {
    state = {
        ids: this.props.unAnswered,
        activeLink: 'unanswered'
    }

    render() {
        const { unAnswered, answered } = this.props
        const { ids, activeLink } = this.state
        return (
            <div className='container polllist-container' >
                <div className='questions'>
                    <p
                        className={activeLink === 'unanswered' ? 'unanswered' : undefined}
                        onClick={() => this.setState({
                            ids: unAnswered,
                            activeLink: 'unanswered'
                        })}
                    >Unanswered Questions</p>

                    <p
                        className={activeLink === 'answered' ? 'answered' : undefined}
                        onClick={() => this.setState({
                            ids: answered,
                            activeLink: 'answered'

                        })}
                    >Answered Questions</p>
                </div>

                <ul>
                    {ids.map(id => (
                        <Poll key={id} id={id} />
                    )
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const sortIds = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

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