import { HashRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/common/NavigationBar';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
import Process from './components/pages/Process';
import FacilitiesPage from './components/pages/FacilitiesPage';
// import './css/config.scss';
import './styles/main.scss';

function App() {
  return (
    <Router baseName='/'>
      <NavigationBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/facilities' component={FacilitiesPage} />
      <Route exact path='/process' component={Process} />
      <Route exact path='/contact' component={ContactUs} />
    </Router>
  );
}

export default App;
