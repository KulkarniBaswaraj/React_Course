class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  handleAddOne() {
    this.setState((state) => {
      return { count: state.count + 1 };
    })
  }
  handleMinusOne() {
    this.setState((state) => {
      return { count: state.count - 1 };
    })
  }
  handleReset() {
    this.setState((state) => {
      return { count: 0 };
    })
  }

  render() {
    return (
      <div id="counter">
        <span className="mr-2"> count: {this.state.count}</span>
        <button className="btn btn-info mr-2" onClick={this.handleAddOne}>+1</button>
        <button className="btn btn-warning" onClick={this.handleMinusOne}>-1</button>
        <button className="btn btn-dark ml-2" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));