import React from 'react';
import {Container} from './styles';
import './Home.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
