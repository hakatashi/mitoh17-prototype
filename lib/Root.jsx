const React = require('react');
const CSSModules = require('react-css-modules');
const Hammer = require('react-hammerjs');

const styles = require('./Root.pcss');
const ContextMenu = require('./ContextMenu.jsx');

class Root extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuActive: false,
			contextMenuPosition: {},
		};
	}

	activateContextMenu({x, y}) {
		this.setState({
			isMenuActive: true,
			contextMenuPosition: {x, y},
		});
	}

	onPress = (event) => {
		this.activateContextMenu({
			x: event.center.x,
			y: event.center.y,
		});
	}

	onContextMenu = (event) => {
		event.preventDefault();

		this.activateContextMenu({
			x: event.clientX,
			y: event.clientY,
		});
	}

	render() {
		return (
			<Hammer onPress={this.onPress} onContextMenu={this.onContextMenu}>
				<div styleName="root">
					{this.state.isMenuActive && <ContextMenu position={this.state.contextMenuPosition}></ContextMenu>}
				</div>
			</Hammer>
		);
	}
}

module.exports = CSSModules(Root, styles);
