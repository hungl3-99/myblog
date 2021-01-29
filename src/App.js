import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/Pages/About';

import LoginForm from './components/Pages/Login';

function App() {
  return (
    <Router>
        <Route path='/'  exact component={Home} />
        <Route path='/about' exact component ={About} />
        <Route path='/login' component={LoginForm} />
    </Router>
  );
}

export default App;
