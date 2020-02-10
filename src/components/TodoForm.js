import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func
	}

	state = {
		text: ''
	}

	handleOnChange = (e) => {
		this.setState({
			text: e.target.value
		});
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		const { text } = this.state;

		if (text === '') {
			return;
		}
		this.setState({ text: '' }, () => {
			if (typeof this.props.onSubmit === 'function')
				this.props.onSubmit(text);
		});
	}

	render() {
		return (
			<form onSubmit={this.handleOnSubmit}>
				<input
					onChange={this.handleOnChange}
					type='text'
					value={this.state.text}
				/>
				<button>Submit</button>
			</form>
		);
	}
}

export default TodoForm;
