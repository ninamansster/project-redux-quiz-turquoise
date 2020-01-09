// import React, { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import 'components/Answers.css'

export const Answers = ({ question }) => {
  const dispatch = useDispatch()
  const checkAnswer = useSelector((store) => {
    // Search in stored answers for an answer on current question
    // [].find returns found item in answers list, returns undefined if not
    const answer = store.quiz.answers.find(({ questionId }) => question.id === questionId)
    if (answer) {
      return answer
    }
    // Return non-boolean to be able to check if answer has been made or not
    return null
  })

  // // Alt. solution
  // const [answerClicked, setAnswerClicked] = useState(-1)

  return (
    <div className="answer-wrap">
      {question && question.options.map((item, index) => {
        const btnClasses = ['answer-buttons']

        // Check if saved answer is set for this question
        if (checkAnswer !== null) {
          if (checkAnswer.answerIndex === index) {
          // Check if current option is same as saved answer index
          // Add class based on correctness :O (right, wrong)
            btnClasses.push(`${checkAnswer.isCorrect ? 'right' : 'wrong'}Answer`)
          } else if (!checkAnswer.isCorrect && question.correctAnswerIndex === index) {
          // When answer is wrong, check if current option is same as saved answer
          // Add rightAnswer class to option that would've been correct
            btnClasses.push('rightAnswer')
          }
        }

        // // Alt. solution (non-Redux)
        // // if (answerClicked > -1) {
        // //   if (answerClicked === index) {
        // //     btnClasses.push(`${index === question.correctAnswerIndex ? 'right' : 'wrong'}Answer`)
        // //   } else if (index === question.correctAnswerIndex) {
        // //     btnClasses.push('rightAnswer')
        // //   }
        // }

        return (
          <button
            className={btnClasses.join(' ')}
            type="button"
            onClick={() => {
              // setAnswerClicked(index)

              dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
            }}>
            {item}
          </button>
        )
      })}
    </div>
  )
}
