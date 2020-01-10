import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import './button.css'

export const NextButton = () => {
  const dispatch = useDispatch()

  return (
    <>
      <button type="button" onClick={() => {
        dispatch(quiz.actions.setProgress())
        dispatch(quiz.actions.goToNextQuestion())
      }}>
        Next Question
      </button>

    </>
  )
}