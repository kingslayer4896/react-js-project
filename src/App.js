import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactForm from './Pages/ContactForm';
import PostSubmission from './Pages/PostSubmission'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/postsubmission" component={PostSubmission} />
        <Route path="/" exact component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;
