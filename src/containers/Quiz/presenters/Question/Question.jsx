import style from './question.scss'
import React, { Component } from 'react'
import store from 'redux/store'
import { submitAnswer } from 'redux/actions'

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { selected: null };
  }

  handleSelect(e) {
    this.setState({ selected: e.target.value })
  }

  handleSubmit() {
    store.dispatch(submitAnswer({
      selected: this.state.selected,
      question: this.props.data
    }))
  }

  render() {
    return(
      <div className="question">
        <div>{this.props.data.text}</div>
        <div className="question__choices">
          {Object.keys(this.props.data.choices).map((choice) => (
            <label className="question__choice" key={this.props.data.id + '-' + choice}>
              <input type="radio" name="question" value={choice} onChange={this.handleSelect} />
              {this.props.data.choices[choice]}
            </label>
          ))}
        </div>
        <div className="button--submit" onClick={this.handleSubmit}>
          Submit
        </div>
      </div>
    )
  }
}
