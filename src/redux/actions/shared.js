import { getInitialData, saveQuestionAnswer, saveQuestion } from '../../utils/api'
import { receiveUsers, addAnswerToUser, addQuestionToUser } from './users'
import { receiveQuestions, addVoteToQuestion, addQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleAddQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(addVoteToQuestion(info))
        dispatch(addAnswerToUser(info))
        return (saveQuestionAnswer(info))
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
            .then((formattedQuestion) => {
                dispatch(addQuestion(formattedQuestion))
                dispatch(addQuestionToUser(formattedQuestion))
            })
            .then(() => dispatch(hideLoading()))
    }
}