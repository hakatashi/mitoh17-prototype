const React = require('react');
const CSSModules = require('react-css-modules');
const styles = require('./ContextMenu.pcss');

class ContextMenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div styleName="context-menu" style={{left: this.props.position.x, top: this.props.position.y}}>
			</div>
		);
	}
}

module.exports = CSSModules(ContextMenu, styles);
