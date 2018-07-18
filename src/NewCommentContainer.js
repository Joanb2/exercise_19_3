import { connect } from 'react-redux';
import { Input } from './NewComment';
import { addComment } from './actions';

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Input);