import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import  Background  from '../../components/Background/WelcomeMessage';
import { Container } from './HomePage.styled';
// import Price from '../../components/Price/Price';

const HomePage: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Background/>
      {/* <Price/> */}

      
      <Footer/>
    </Container>
  );
};

export default HomePage;
