import React, {Component} from 'react';

export default class RecordForm extends Component{
  constructor(props){
    super(props);
    this.state={
      date:'',
      title:'',
      amount:''
    }
  }
  render(){
    return (
      <form className='form-inline'>
        <div className="form-group">
          <input type="text" placeholder='Date' onChange={this.handleInputChange.bind(this)} name='date' className="form-control" value={this.state.date}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder='Title' onChange={this.handleInputChange.bind(this)} name='title' className="form-control" value={this.state.title}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder='Amount' onChange={this.handleInputChange.bind(this)} name='amount' className="form-control" value={this.state.amount}/>
        </div>
        <button className="btn btn-primary" disabled={!this.validBtnControl()}>Create Record</button>
      </form>
    )
  }
  handleInputChange(event){
    // 1.笨办法
  //  if(event.target.name==='date'){
  //    this.setState({
  //      date:event.target.value
  //    })
  //  }else if(event.target.name==='title'){
  //    this.setState({
  //      title:event.target.value
  //    })
  //  }else if(event.target.name==='amount'){
  //    this.setState({
  //      amount:event.target.value
  //    })
  //  }

  //  2.灵活办法
  // let name,obj;
  // name=event.target.name;
  // this.setState((
  //   obj={},
  //   obj[''+name]=event.target.value,
  //   obj
  // ))

  //  3.参考2写出的最简单的方法
  let name=event.target.name;
   this.setState({
    //  一个取巧的小关键
     [''+name]:event.target.value
   })
}

   

  
  validBtnControl(){
    return this.state.date && this.state.date && this.state.amount;
  }
}