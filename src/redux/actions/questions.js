export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_VOTE_TO_QUESTION = 'ADD_VOTE_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addVoteToQuestion({ authedUser, qid, answer }) {
    return {
        type: ADD_VOTE_TO_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function addQuestion(questions) {
    return {
        type: ADD_QUESTION,
        questions,
    }
}