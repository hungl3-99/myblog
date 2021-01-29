import './App.css';
import PageWrapper from './components/PageWrapper'
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper >

        <Route path='/'  exact component={Home} />
        <Route path='/about' component ={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component ={Contact} />
      </PageWrapper>
    </Router>


  );
}

export default App;
