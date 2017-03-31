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
        <form>
          {Object.keys(this.props.data.choices).map((choice) => (
            <label key={this.props.data.id + '-' + choice}>
              {this.props.data.choices[choice]}
              <input type="radio" name="question" value={choice} onChange={this.handleSelect} />
            </label>
          ))}
        </form>
        <div className="submit_button" onClick={this.handleSubmit}>
          Submit
        </div>
      </div>
    )
  }
}
