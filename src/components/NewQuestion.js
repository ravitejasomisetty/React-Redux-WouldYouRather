import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';


class NewQuestion extends Component {
    state = { optionOne: '', optionTwo: '' }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(handleAddQuestion({
            author: this.props.authedUser,
            optionOneText: this.state.optionOne, optionTwoText: this.state.optionTwo
        }))

        this.setState({ optionOne: '', optionTwo: '' })
        this.props.history.push('/home')
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Option One:
          <input type="text" id='optionOne' value={this.state.optionOne} onChange={this.handleChange} />
                </label>
                <label>
                    Option Two:
          <input type="text" id='optionTwo' value={this.state.optionTwo} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" className='btn' />
            </form>
        </div>)
    }
}

export default connect(({ authedUser }) => ({ authedUser }))(NewQuestion)