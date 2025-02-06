
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Start from './pages/Start'
import { useState } from 'react'
import Question from './pages/Question'

function App() {
  const [display, setDisplay] = useState('start')
  return (
    <>
      <div className='h-screen flex flex-col'>
        <Header display={display}/>
        <div className='w-full bg-slate-400 flex-1'>
          {display === 'start' && <Start setDisplay={setDisplay}/>}
          {display === 'question' && <Question/>}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
