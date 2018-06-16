import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUp} from './index';

const mapDispatchToProps = dispatch => ({
	thumbUp: (id) => dispatch(thumbUp(id))
});

export default connect(null, mapDispatchToProps)(Comment);