import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './services/routes';
import GlobalStyles from './theme/globalStyles';

const App: React.FC = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Routes />

    <Footer />
  </Router>
);

export default App;
