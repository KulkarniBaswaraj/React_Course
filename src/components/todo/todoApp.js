import React from 'react';
import Header from './todoHeader';
import Options from './todoOptions';
import AddTodo from './addTodo';
import TodoModal from './modal';

export default class TodoApp extends React.Component {

  state = {
    todos: [],
    isOpen: false,
    contentLabel: undefined
  }

  addTodo = (e) => {
    e.preventDefault();
    console.log("test");
    const todo = e.target.elements.todoInp.value.trim();
    if (todo) {
      this.setState((prevState) => ({ todos: prevState.todos.concat([todo]) }));
    }
  }
  resetTodo = () => {
    this.setState(() => ({ todos: [] }));
  }
  deleteItem = (todos) => {
    this.setState(() => ({ todos: todos }))
  }
  openModal = (bool) => {
    console.log(bool);
    this.setState(() => ({ isOpen: bool, contentLabel: "ex" }));
    // this.state.isOpen =  true;
    // console.log(this.state);
  }
  componentDidMount = () => {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);
      if (todos) {
        this.setState(() => ({ todos }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate = (state, prevState) => {
    if (this.state.todos.length) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }
  componentWillUnmount() {

  }
  render() {
    return (

      <div className="comp-wrapper">
        <Header />
        <div className="main-content-wrapper app-container">
          <Options todos={this.state.todos} deleteItem={this.deleteItem} />
          <AddTodo
            resetTodo={this.resetTodo}
            hasTodos={this.state.todos.length > 0}
            addTodo={this.addTodo}
            openModal={this.openModal}
          />
          <TodoModal
            isOpen={this.state.isOpen}
            contentLabel={this.state.contentLabel}
            todos={this.state.todos}
            openModal={this.openModal}
          />
        </div>
      </div>
    )
  }
}
