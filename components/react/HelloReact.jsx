class HelloReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>Count: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>+</button>
      </div>
    );
  }
}

HelloReact.propTypes = {
  name: React.PropTypes.string.isRequired
}

angular
  .module('app')
  .value('HelloReact', HelloReact);
