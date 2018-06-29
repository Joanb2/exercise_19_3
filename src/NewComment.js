import React from 'react';

export class Input extends React.Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addComment(this.state.text);
		this.setState({text: ''});
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({text: event.target.value});
	}

	render() {
		return (
			<div>
				<form onSubmit={event => this.handleSubmit(event)}>
					<input 
						type='text'
						placeholder='Write your comment'
						onChange={event => this.handleChange(event)}
						value={this.state.text}
					/>
					<button type="submit">add comment</button>
				</form>
			</div>
		);
	}
}