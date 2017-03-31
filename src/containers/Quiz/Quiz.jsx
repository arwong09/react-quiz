import style from './quiz.scss'
import React, { Component } from 'react'
import ProgressBar from './presenters/ProgressBar/ProgressBar.jsx'
import Question from './presenters/Question/Question.jsx'
import { QUESTIONS } from 'data/questions.js'
import store from 'redux/store'

export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answeredQuestions: 1,
      currentQuestion: QUESTIONS['001']
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        answeredQuestions: Object.keys(store.getState().answers).length + 1,
        currentQuestion: QUESTIONS[store.getState().currentQuestionId]
      })
    })
  }

  render() {
    return (
      <div className="quiz">
        <ProgressBar
          answeredQuestions={this.state.answeredQuestions}
          totalQuestions={Object.keys(QUESTIONS).length} />
        <Question data={this.state.currentQuestion} />
      </div>
    )
  }
}
