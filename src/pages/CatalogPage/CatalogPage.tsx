import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Background } from '../../pages/FavoritesPage/FavoritesPage.styled';
import TitlebarImageList from '../../components/ImageList/ImageList';


const CatalogPage: React.FC = () => {
 
  return (
    <Background>
      <Header />
      <TitlebarImageList/>
      <Footer />
    </Background>
  );
};

export default CatalogPage;
