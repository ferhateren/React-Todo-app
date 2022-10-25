import React from 'react'
import moment from "moment"

function Calender() {
  let day = moment().date();
  let month = moment().format('MMMM');
  let year = moment().format('YYYY');
  let date = moment().format('dddd');
  return (
    <div className='mt-20 flex item-center justify-between pb-7 text-2xl color-white'>
        <div className='item-center flex'>
          <h1 className="bold text-[64px] self-center">{day}</h1>
          <div className='text-left pl-2'>
            <h1 className="bold">{month}</h1>
            <p className='bold'>{year}</p>
          </div>
        </div>
        <div className='self-center flex text-[30px]'>
          <h2 className='bg-transparent'>{date}</h2>
        </div>
    </div>
  )
}

export default Calender