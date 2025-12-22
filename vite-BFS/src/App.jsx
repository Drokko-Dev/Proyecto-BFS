import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/SideBar'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Header />
      <SideBar
      isOpen={show}
      handleClick={() => setShow((show) => !show)}
      >
      </SideBar>
      <Main></Main>
    </>
  )
}

export default App
