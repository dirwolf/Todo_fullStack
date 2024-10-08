// import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
function App() {

  return (
    <>
      <div>
        <CreateTodo/>
        Hi there
        <Todos/>
      </div>
    </>
  )
}

export default App
