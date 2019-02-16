import React, { Component } from 'react';
import Record from './Record';
import RecordForm  from './RecordForm'
import AmountBox from './AmountBox'
import * as RecordsAPI from '../utils/RecordsAPI';

class Records extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      error:null,
      records:[]
    }
  }
  render() {
    const {error,isLoaded,records} =this.state;
    let recordsComponent;
    if(error){
      // 每个库获取错误信息的api是不一样的，axios是error.message
      recordsComponent= <div>Error:{error.message}</div>
      
    }else if(!isLoaded){
      recordsComponent= <div>Loading...</div>
    }else{
        recordsComponent= (
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>do Some Thing?</th>
                </tr>
              </thead> 
              <tbody>
                {
                  records.map(record=><Record key={record.id} {...record} 
                    handleUpdateRecord={this.updateRecord.bind(this)}
                    handleDeleteRecord={this.deleteRecord.bind(this)}
                    />)
                }
              </tbody>
            </table>
          </div>
        );
    }
    return (
      <div>
            <h2>Records</h2>
            <div className="row mb-3">
              <AmountBox text='收入(Credits)'type='success'  amount={this.credits()}   />
              <AmountBox text='支出(Debits)' type='danger'   amount={this.debits()}   />
              <AmountBox text='合计(Balance)' type='info'    amount={this.babance()}   />
            </div>
            <RecordForm createNewRecord={this.handleCreateNewRecord.bind(this)}></RecordForm>
            {recordsComponent}
      </div>
    )

  }
  componentDidMount(){
    // 发起请求fetch版本
    // fetch('https://5c66bbb324e2140014f9edd2.mockapi.io/api/v1/records/')
    // .catch(error=>{
    //   console.log('a '+error.toString())
    //   this.setState({
    //     isLoaded:true,
    //     error
    //   })
    // })
    // .then(res=>res.json())
    // .then(res=>{
    //   this.setState({
    //     isLoaded:true,
    //     records:res
    //   })
    // })

    // 发起请求axios版本老版本
    // axios.get('https://5c66bbb324e2140014f9edd2.mockapi.io/api/v1/records/').then(res=>{
    // 新版本,利用环境变量的方式
    RecordsAPI.getAll().then(res=>{
      this.setState({
        isLoaded:true,
        records:res.data
      })
    }).catch(error=>{
      this.setState({
        isLoaded:true,
        error
      })
    })
  }
  // 获取records数据
  handleCreateNewRecord(data){
    // 方法一
    // let oldState=this.state.records;
    // oldState.push(data);  
    // this.setState({
    //   records:oldState,
    //   error:null,
    //   isLoaded:true
    // })

    // 方法二（推荐）
    this.setState({
      records:[...this.state.records,data],
      // 把error和isloaded都更新
      error:null,
      isLoaded:true
    })
  }
  updateRecord(data){ //更新数据
    let records=this.state.records.map(record=>{
      if(data.id===record.id){
        return data;
      }
      else{
        return record
      }
    })
    this.setState({
      records
    })
  }
  deleteRecord(data){ //删除数据
    let newR=this.state.records.filter((item,index)=>{
      return item.id!==data.id
    })
    this.setState({
      records:newR
    })
  }
  credits(){ //收入
    let credits=this.state.records.filter(item=>{
      return item.amount>=0
    })
    return credits.reduce((prev,curr)=>{
        return prev+curr.amount*1;
    },0)

  }
  debits(){ //支出
    let debits=this.state.records.filter(item=>{
      return item.amount<0
    })
    return debits.reduce((prev,curr)=>{
      return prev+curr.amount*1
    },0)
  }
  babance(){
    return this.credits()+this.debits();
  }
}

export default Records;
