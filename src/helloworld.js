// React.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );

var Picture = React.createClass({
	render: function() {
		return (

	            <div>
	                <h1>Popular Instagram pics</h1>
	            </div>

	        );
	}
});

var PictureList = React.createClass({
    
    getInitialState: function() {

    	return { pictures: [], favorites: [] };
    },

    render: function() {
    	
    }
});

React.renderComponent(
    <Picture />,
    document.body
);