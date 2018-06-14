import {
	ADD_COMMENT,
	REMOVE_COMMENT,
	EDIT_COMMENT,
	THUMB_UP_COMMENT,
	THUMB_DOWN_COMMENT
} from './actions';


export function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT: 
			return [{
				id: action.id,
				text: action.text
				votes: 0
			}
			, ...state.comments];

		case REMOVE_COMMENT:
			return state.comments.filter(comment => comment.id !== action.id)

		case EDIT_COMMENT: 
			return state.comments.map(comment => {
				if(comment.id === action.id) {
					return 
						text: action.text
				}
			});

		case THUMB_UP_COMMENT: 
			return state.comments.map(comment => {
				if(comment.id === action.id) {
					return
						votes: action.votes + 1
				}
			});

		case THUMB_DOWN_COMMENT: 
			return state.comments.map(comment => {
				if(comment.id === action.id) {
					return
						votes: action.votes - 1
				}
			});

		default:
			return state;
	}
}

