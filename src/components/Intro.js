import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import './button.css'

export const Intro = () => {
  const dispatch = useDispatch()
  const quizStarted = useSelector((state) => state.quiz.quizStarted)

  return (
    <>
      {!quizStarted &&
        <div className="introtext">
          <h1 className="introHeading">Time to quiz!</h1>
          <p className="quizCategory"> Do you know the Capital cities in Europe!?</p>
          <button type="button" onClick={() => dispatch(quiz.actions.start())}>Start</button>
        </div>
      }
    </>
  )
}