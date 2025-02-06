import React from 'react'

const Header = ({display}) => {
  return (
    <div className='w-full flex items-center px-[73px py-[9px] text-amber-700 h-[88px] bg-slate-500'>
        {display !== 'start' && <div className='text-[55px] p-5'>QUIZ APP</div>}
    </div>
  )
}

export default Header