class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.addTodo = this.addTodo.bind(this);
      this.resetTodo = this.resetTodo.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
  
      this.state = {
        todos: [],
      }
    }
    addTodo(e) {
      e.preventDefault();
      const todo = e.target.elements.todoInp.value.trim();
      if (todo) {
        this.setState((prevState) => ({ todos: prevState.todos.concat([todo]) }));
      }
    }
    resetTodo() {
      this.setState(() => ({ todos: [] }));
    }
    deleteItem(todos) {
      this.setState(() => ({ todos: todos }))
    }
    componentDidMount() {
      try {
        const json = localStorage.getItem("todos");
        const todos = JSON.parse(json);
        if(todos) {
          this.setState(() => ({todos}));
        }
      } catch(e) {
  
      }
    }
    componentDidUpdate(state, prevState) {
      if(this.state.todos.length) {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    }
    componentWillUnmount() {
      
    }
    render() {
      return (
        <div className="container mt-4">
          <div id="todo-wrapper">
            <Header />
            <Options todos={this.state.todos} deleteItem={this.deleteItem} />
            <AddTodo resetTodo={this.resetTodo} hasTodos={this.state.todos.length > 0} addTodo={this.addTodo} />
          </div>
        </div>
      )
    }
  }
  
  const Header = () => {
    return (
      <h3 className="jumbotron text-center p-3"> Todo Apps11 </h3>
    );
  }
  
  const Options = (props) => {
    const todos = props.todos;
    const deleteTodo = (index) => {
      todos.splice(index, 1)
      props.deleteItem(todos);
    }
    return (
      <div id="todo">
        <h4> Todos ( {todos.length} ) </h4>
        <ul className="list-group mb-3">
          {
            todos.map((todo, index) => {
              return <li className="list-group-item"
  
                key={index}>
                {todo}
                <span className="badge" onClick={() => deleteTodo(index)}>&#10006;</span>
              </li>
            })
          }
          {todos.length == 0 && <li className="list-group-item text-center"> No Items Found </li>}
        </ul>
      </div>
    );
  }
  
  
  const AddTodo = (props) => {
    const hasTodos = props.hasTodos
    return (
      <form className="form-inline" onSubmit={props.addTodo}>
        <div className="form-group">
          <input type="text" name="todoVal" className="form-control" id="todoInp" placeholder="Enter Todo" />
          <button className="btn btn-info ml-2"> Add </button>
          <button type="button" className="btn btn-warning ml-2" onClick={props.resetTodo} disabled={!props.hasTodos}> Reset </button>
        </div>
      </form>
    );
  }
  
  ReactDOM.render(<TodoApp />, document.getElementById('app'));