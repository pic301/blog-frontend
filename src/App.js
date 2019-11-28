import React from 'react';
import {Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'
import WritePage from './pages/WritePage'

function App() {
  return (
    <>
      <Route path="/login" component={LoginPage}/>
      <Route path={['/@:username','/']} component={PostListPage} exact />
      <Route path="/@:username/:postId" component={PostPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/write" component={WritePage}/>
     
    </>
  );
}

export default App;
