import React from 'react'
import { questions } from '../data/data'

const Question = () => {
  return (
    <div className='h-full relative p-[54px] flex flex-col gap-[54px]'>
        <div className='flex text-white text-[32px] justify-center text-center'>
            {`Question 1 : ${questions[0].question}`}
        </div>
        <div className='grid grid-cols-2 gap-x-[142px] gap-y-[42px] mx-[20px]'>
            {Object.entries(questions[0].options).map(([key, value]) => (<div key={key} className='bg-amber-700 rounded-[12px] px-[42px] py-[24px] text-white text-[32px] text-center'>{value}</div>))}
        </div>
    </div>
  )
}

export default Question