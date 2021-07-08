import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }
  handleChanges = evt => {
    this.setState({
      inputValue: evt.target.value
    })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.handleAdd(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='item' onChange={this.handleChanges} value={this.state.inputValue} />
        <button>ADD Task</button>
      </form>
    );
  }
}

export default TodoForm
