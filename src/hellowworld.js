React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

var Picture = React.createClass({
  clickHandler: function() {
  	this.props.onClick(this.props.ref);
  },

  render: function() {
  	var cls = 'picture ' + (this.props.favorite ? 'favorite' : '');

  	return (
        <div claddName={cls} onClick=
        {this.clickHandler}>
  		) 
  }
});