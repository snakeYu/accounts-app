import React from 'react'

const AmountBox=({text,type,amount})=>{
  return (
    <div className='col'>
      <div className="card">
        <div className={`card-header text-white bg-${type}`}>
          {text}
        </div>
        <div className="card-body">
            {amount}
        </div>
      </div>
    </div>
  )
}
export default AmountBox;