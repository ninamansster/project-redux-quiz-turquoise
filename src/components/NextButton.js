import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import './button.css'

export const NextButton = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)

  console.log(answers.length)
  console.log(currentQuestion)

  return (
    <>
      {answers.length > currentQuestion &&
        <button type="button" onClick={() => {
        dispatch(quiz.actions.setProgress())
        dispatch(quiz.actions.goToNextQuestion())
      }}>
        Next Question
      </button>
      }
    </>
  )
}