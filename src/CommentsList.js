import React from 'react';
import Comment from './CommentsContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;