import React from 'react'
import Todo from './Todo'
import Header from './Header';
import { Text } from './Text';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo, isCompleted }) => (
  <Header headerName={isCompleted ? 'COMPLETED' : 'TODO'}>
    {
      (todos || []).length ? todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
        onUpdate={(text) => updateTodo(todo.id, text)}
      />
    ) : <Text>No Data Found</Text>
  }
    
  </Header>
)

export default TodoList
