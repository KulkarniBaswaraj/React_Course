const command = {
    str1: "babel src/app.js --out-file=public/scripts/app.js ",
    str2: "--presets=env,react --watch",
  }
  
  let count = 0;
  const decrement = () => {
    count = count - 1;
    console.log(count);
    renderCounterApp();
  }
  
  let todos = [];
  
  const formSubmit = (e) => {
    e.preventDefault()
    todos.push(e.target.elements.todoInp.value);
    console.log(todos);
    renderCounterApp();
  }
  const reset = (e) => {
    todos = [];
    document.getElementById('todoInp').value = "";
    renderCounterApp();
  }
  const remove = (e) => {
    // todos.splice(index, 1)
    console.log(e);
    renderCounterApp();
  }
  const templateBlock = () => {
    let todoTemplate = (
      <section id="todo">
        <h4> Todos ( {todos.length} ) </h4>
        <ul className="list-group mb-3">
          {
            todos.map((el, index) => {
              return <li className="list-group-item" key={index}> {el}
                <span className="badge" data-index={index} onClick={remove}>&#10006;</span>
              </li>
            })
          }
          { todos.length == 0 && <li className="list-group-item text-center"> No Items Found </li>}
        </ul>
        <form className="form-inline" onSubmit={formSubmit}>
          <div className="form-group">
            <input type="text" name="todoVal" className="form-control" id="todoInp" placeholder="Enter Todo" />
            <button className="btn btn-info ml-2"> Add </button>
            <button type="button" className="btn btn-warning ml-2" onClick={reset}> Reset </button>
          </div>
        </form>
      </section>
    );
  
    let template = (
      <div className="container mt-4">
        <div id="todo-wrapper">
          {todoTemplate}
        </div>
      </div>
    );
    return template
  }
  
  const appRoot = document.getElementById('app');
  const renderCounterApp = () => {
    const mainTemplate = templateBlock();
    ReactDOM.render(mainTemplate, appRoot);
  }
  
  renderCounterApp()
  