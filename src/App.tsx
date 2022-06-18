import React from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Container } from './components/Container';
import { Home } from './pages/Home';
import { Help } from './pages/Help';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CategoriesProvider } from './store/categories';
import { GeneralProvider } from './store/general';


function App() {
  return (
    <CategoriesProvider>
      <GeneralProvider>
        <Router>
          <Navbar />
          <Switch>
            <Container>
              <Route exact path='/' >
                < Home />
              </Route>
              <Route path='/help'>
                < Help />
              </Route>
              <Route path='/contact'>
                < Contact />
              </Route>
              <Route path='/about'>
                < About />
              </Route>
              <Route path='/privacy'>
                < Privacy />
              </Route>
              <Route path='/terms'>
                < Terms />
              </Route>
            </Container>
          </Switch>
          <Footer />
        </ Router>
      </GeneralProvider>
    </CategoriesProvider>
    );
}

export default App;
