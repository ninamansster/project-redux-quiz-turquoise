import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const RestartButton = () => {
  const dispatch = useDispatch()
  const quizEnd = useSelector((state) => state.quiz.quizOver)

  return (
    <>
      {quizEnd && (
        <div>
          <h1>YOU RESULT:</h1>
          <button type="button" onClick={() => dispatch(quiz.actions.restart())}>
            Do it again!
      </button>
        </div>)
      }
    </>
  )
}

// the restartbutton is shown when quizOver is true