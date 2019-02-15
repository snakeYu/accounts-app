import React,{Component} from 'react'

class Record extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
         <tr>
            <td>{this.props.record.date}</td>
            <td>{this.props.record.title}</td>
            <td>{this.props.record.amount}</td>
          </tr>
    )
  }
}

export default Record;