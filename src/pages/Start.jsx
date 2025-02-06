import React from 'react'

const Start = ({setDisplay}) => {
  return (
    <div className='flex flex-col gap-5 items-center h-full justify-center'>
      <div className='text-pink-400 text-[120px]'>QUIZ APP</div>
      <div className='bg-amber-700 border-pink-400 border-[6px] text-[48px] px-5 text-pink-400 rounded-xl cursor-pointer hover:bg-pink-400 hover:text-amber-700' onClick={() => setDisplay('question')}>Start</div>
      <div className='text-amber-400 text-[24px] text-center'>Dont let the setbacks define you <br /> let them be stepping to triumph.</div>
    </div>
  )
}

export default Start