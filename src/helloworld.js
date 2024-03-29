var Picture = React.createClass({
	render: function() {
		return (
	            <div>
	                <h1>Popular Instagram pics</h1>
	            </div>

	        );
	}
});

var Dialog = React.createClass({
  render: function() {
		return (
			<div className="react-dialog dialog transparent-border full" >
			<div className="inside">
				<h2><span>{this.props.text}</span></h2>
				<div className="buttons">
					<button className="ok-button" onClick={this.okAction}><span></span></button>
					<button className="cancel-button" onClick={this.cancelAction}><span>foo</span></button>
				</div>
			</div>
		</div>
  	);
  }
});

React.renderComponent(
	    <Dialog
				text="Do you want to continue?"
				okButtonText="OK"
				cancelButtonText="Cancel"
				okAction={this.okAction}
			/>,
    document.body
);
