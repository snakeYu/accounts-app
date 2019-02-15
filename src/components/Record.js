import React,{Component} from 'react'
import {localDate} from '../utils/time'

class Record extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
         <tr>
            <td>{localDate(this.props.date*1)}</td>
            <td>{this.props.title}</td>
            <td>{this.props.amount}</td>
          </tr>
    )
  }
}

export default Record;