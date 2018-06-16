import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const addComment = function addComment(text) {
	return {
		type: ADD_COMMENT,
		id: uuid.v4(),
		text: text
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text: text,
		id: id
	}
}

const thumbUp = function thumbUp(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id
	}
}

function thumbDown(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id
	}
}

export ADD_COMMENT;
export addComment;
export THUMB_UP_COMMENT;
export thumbUp;