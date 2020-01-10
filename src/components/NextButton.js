import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import './button.css'

export const NextButton = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex) 
  const currentAnswer = answers.find(q => q.questionId === currentQuestion + 1)
  // console.log(answers)
  // console.log(currentQuestion)
  // currentAnswer.isCorrect 

  return (
    <>
      {answers.length > currentQuestion &&
        <button type="button" onClick={() => {
        dispatch(quiz.actions.setProgress())
        dispatch(quiz.actions.goToNextQuestion())
        if (currentAnswer.isCorrect) {
          dispatch(quiz.actions.setScore())
        }
        
      }}>
        Next Question
      </button>
      }
    </>
  )
}