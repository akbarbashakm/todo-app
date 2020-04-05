import React from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <VisibleTodoList isCompleted={true}/>
  </div>
)

export default App
