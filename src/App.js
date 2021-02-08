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
    <Router basename={'/react-js-project/'}>
        <Route path="/" exact component={ContactForm} />
        <Route path="/postsubmission" component={PostSubmission} />
    </Router>
  );
}

export default App;
