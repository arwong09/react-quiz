import style from './progress_bar.scss'
import React from 'react'

export default ({ answeredQuestions, totalQuestions }) => (
  <div className="progress_bar">
    <div>{answeredQuestions} / {totalQuestions}</div>
  </div>
)

