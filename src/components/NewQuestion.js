import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared';


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
        const { optionOne, optionTwo } = this.state
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Option One:
          <input type="text" id='optionOne' value={optionOne} onChange={this.handleChange} />
                </label>
                <label>
                    Option Two:
          <input type="text" id='optionTwo' value={optionTwo} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" className='btn' disabled={!(optionOne && optionTwo)} />
            </form>
        </div>)
    }
}

export default connect(({ authedUser }) => ({ authedUser }))(NewQuestion)