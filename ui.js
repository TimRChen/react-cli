'use strict';

const {h, Component, Text} = require('ink');
const PropTypes = require('prop-types');
const ProgressBar = require('ink-progress-bar');
let child_process = require('child_process');


class UI extends Component {
	constructor() {
		super();

		this.state = {
			i: 0
		};
	}

	render() {
		return (
			<div>
				<Text red>
					The virus has been resolve...
				</Text>
				<br/>
				<ProgressBar
					char="x"
					percent={this.state.i}
					left={5}
					right={0}
					green
				/>
				<br/>
				<Text green>
					loading...{
						parseInt(this.state.i * 100) < 100 ? parseInt(this.state.i * 100) : 100
					}%
				</Text>
			</div>
		);
	}

	componentDidMount() {
		let _self = this;
		function doing () {
			return new Promise(function (resolve, reject) {
				_self.timer = setInterval(() => {
					_self.setState({
						i: _self.state.i + 0.1
					});
					_self.state.i > 1 ? resolve() : null;
				}, 100);
			})
		}

		let start = async function justdoit () {
			await doing();
			child_process.exec('ls -a', (error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}\n`);
					return;
				}
				console.log(`stdout: \n ${stdout}`);
				console.log(`stderr: \n ${stderr}`);
			});
		}

		start();

	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}

module.exports = UI;


// UI.propTypes = {
// 	name: PropTypes.string
// };

// UI.defaultProps = {
// 	name: 'Ink'
// };
