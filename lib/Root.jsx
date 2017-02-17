const React = require('react');
const CSSModules = require('react-css-modules');
const styles = require('./Root.pcss');

class Root extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div styleName="root">
			</div>
		);
	}
}

module.exports = CSSModules(Root, styles);
