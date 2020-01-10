import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { RestartButton } from 'components/RestartButton'
import { Intro } from 'components/Intro'
import { CurrentQuestion } from 'components/CurrentQuestion'
import 'app.css'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <div className="background">
        <Intro />
        <CurrentQuestion />
        <RestartButton />
      </div>
    </Provider>
  )
}
//Turnery !quizStart shows the starting text. Turnery quizStart shows the questions.

