var HelloReact = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
});

angular
  .module('app')
  .value('HelloReact', HelloReact);
