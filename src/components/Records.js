import React, { Component } from 'react';
import Record from './Record'

class Records extends Component {
  constructor(props){
    super(props);
    this.state={
      records:[
        {
          id:'1',
          date:'2018-01-12',
          title:'收入',
          amount:'20'
        },{
          id:'2',
          date:'2018-12-01',
          title:'支出',
          amount:'-200'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead> 
          <tbody>
            {
              this.state.records.map(record=><Record key={record.id} record={record}/>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
