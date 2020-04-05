import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, updateTodo } from '../actions'
import TodoList from '../components/TodoList'
import { setVisibilityFilter } from '../actions'
import { VisibilityFilters } from '../actions'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, VisibilityFilters[ownProps.isCompleted ? 'SHOW_COMPLETED' : 'SHOW_ACTIVE'])
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  onClick: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
