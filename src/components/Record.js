import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {localDate} from '../utils/time';


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

Record.propTypes={
  id:PropTypes.number,
  date:PropTypes.string,
  title:PropTypes.string,
  amount:PropTypes.number
}

export default Record;