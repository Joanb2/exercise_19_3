import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import NewCommentContainer from './NewCommentContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
    	<NewCommentContainer/>
      <CommentsListContainer/>
      <DevTools/>
    </div>
  );
};

export default App;
