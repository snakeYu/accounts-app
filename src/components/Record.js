import React,{Component} from 'react'
import PropTypes from 'prop-types';
import * as RecordAPI from '../utils/RecordsAPI'
// import {localDate} from '../utils/time';


class Record extends Component{
  constructor(props){
    super(props);
    this.state={
      edit:false
    }
  }
  recordRow(){
    return (
       <tr>
          <td>{this.props.date}</td>
          <td>{this.props.title}</td>
          <td>{this.props.amount}</td>
          <td>
            <button className='btn btn-info mr-1' onClick={this.handleToggle.bind(this)}>Edit</button>
            <button className='btn btn-danger' onClick={this.handleDelete.bind(this)}>Delete</button>
          </td>
        </tr>
  )}
  recordForm(){
    return (
        <tr>
          <td>
              <input className='form-control' name='date' type="text" ref='date' defaultValue={this.props.date}/>
          </td>
          <td>
              <input className='form-control' name='title' type="text" ref='title' defaultValue={this.props.title}/>
          </td>
          <td>
              <input className='form-control' name='amount' type="text" ref='amount' defaultValue={this.props.amount}/>
         </td>
         <td>
              <button className="btn btn-info mr-1" onClick={this.handleUpdate.bind(this)}>Update</button>
              <button className="btn btn-danger" onClick={this.handleToggle.bind(this)}>Cancel</button>
         </td>
        </tr>
    
    )
  }
  render(){
    if(this.state.edit){
      return this.recordForm();
    }else{
      return this.recordRow()
    }
  }
  
  handleToggle(){ //切换模式
    this.setState({
      edit:!this.state.edit
    })
  }
  handleUpdate(event){ //更新数据
    event.preventDefault();
    let body={
      date:this.refs.date.value,
      title:this.refs.title.value,
      amount:this.refs.amount.value
    }
    RecordAPI.updateRecord(this.props.id,body)
    .then(res=>{
      this.props.handleUpdateRecord(res.data)
      this.handleToggle()
    })
    .catch(error=>{
      console.log(error.message)
      
    })
  }
  handleDelete(event){ //删除数据
    event.preventDefault()

    RecordAPI.deleteRecord(this.props.id)
    .then(res=>{
        this.props.handleDeleteRecord(res.data)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
}

Record.propTypes={
  id:PropTypes.string,
  date:PropTypes.string,
  title:PropTypes.string,
  amount:PropTypes.string
}

export default Record;