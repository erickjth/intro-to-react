import React from 'react';

class Todo extends React.Component {
	render() {
		const { text, isDone, onCheck } = this.props;

		return (
			<div>
				<p>{text}</p>
				<input
					type='checkbox'
					checked={isDone}
					onChange={onCheck}
				/>
			</div>
		);
	}
}

export default Todo;
