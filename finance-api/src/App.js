import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Pricing from './components/pages/Pricing/Pricing';
import SignUp from './components/pages/SignUp/SignUp';
import SigninPage from './components/pages/SignIn/SignIn';


function App() {
  return (
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/services' component={Services}/>
       <Route path='/products' component={Products}/>
       <Route path='/pricing' component={Pricing}/>
       <Route path='/signin' component={SigninPage}/>

       <Route path='/sign-up' component={SignUp}/>
     </Switch>
     <Footer />
     
    </Router>
  );
}

export default App;
