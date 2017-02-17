const React = require('react');
const CSSModules = require('react-css-modules');
const Hammer = require('react-hammerjs');
const styles = require('./Root.pcss');

class Root extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	onTap = (event) => {
		console.log(event);
	}

	onContextMenu = (event) => {
		event.preventDefault();
		console.log(event);
	}

	render() {
		return (
			<Hammer onTap={this.onTap} onContextMenu={this.onContextMenu}>
				<div styleName="root">
				</div>
			</Hammer>
		);
	}
}

module.exports = CSSModules(Root, styles);
