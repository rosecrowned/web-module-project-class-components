import React from 'react';
import './components/Todo.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const list = [
  {
    name: "brush the dog",
    id: 1,
    done: false,
  },
  {
    name: "feed the fish",
    id: 2,
    done: false,
  },
  {
    name: "walk the lobster",
    id: 3,
    done: false,
  },

];


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super()
    this.state = {
      list: list
    }
  }
  handleAdd = (task) => {
    const item = {
      name: task,
      id: Date.now(),
      completed: false
    }
    const newTask = [...this.state.list, item]
    this.setState({
      list: newTask
    })
  }
  handleClear = () => {
    const newList = this.state.list.filter(task => {
      return !task.completed
    })
  }
  handleToggle = (itemId) => {
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList handleToggle={this.handleToggle} handleClear={this.handleClear} list={this.state.list} />
      </div>
    );
  }
}

export default App;