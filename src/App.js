import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import NewCommentContainer from './NewCommentContainer';
const App = () => {
  return (
    <div className="App">
    	<NewCommentContainer/>
      <CommentsListContainer/>
    </div>
  );
};

export default App;
