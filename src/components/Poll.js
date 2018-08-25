import React from 'react'
import {connect} from 'react-redux'

class Poll extends React.Component{
    render(){
        console.log('Poll props:',this.props)
        return(<div>Poll</div>)
    }
}

export default connect(({questions}, qid) => ({questions, qid}))(Poll)