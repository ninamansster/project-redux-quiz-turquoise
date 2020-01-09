import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const RestartButton = () => {
  const dispatch = useDispatch()

  return (
    <>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>
        Do it again!
      </button>

    </>
  )
}