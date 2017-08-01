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
					generator a simple react with webpack item...
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
					download...{
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
			child_process.exec(`cd ../ && rm -rf react-webpack-item && mkdir react-webpack-item && cd react-webpack-item && git clone https://github.com/TimRChen/react-webpack.git && rm -rf ./react-webpack/.git && mv ./react-webpack/* ./ && rm -rf ./react-webpack`, (error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}\n`);
					return;
				}
				
				console.log(`stdout: \n ${stdout}`);
				console.log(`stderr: \n ${stderr}`);

				process.exit();
			});
		}
		start();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}

module.exports = UI;