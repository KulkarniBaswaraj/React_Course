import React from 'react';
const AddTodo = (props) => {
    const hasTodos = props.hasTodos
    return (
      <form className="form-inline" onSubmit={props.addTodo}>
        <div className="form-group">
          <input type="text" name="todoVal" className="form-control" id="todoInp" placeholder="Enter Todo" />
          <button className="btn btn-info ml-2"> Add </button>
          <button type="button" className="btn btn-warning ml-2" onClick={props.resetTodo} disabled={!props.hasTodos}> Reset </button>
          {/*<button type="button" className="btn btn-default" onClick={() => props.openModal(true)}> Show </button> */}
        </div>
      </form>
    );
  }

  export default AddTodo;