import React from 'react';
import { NavWrap, LinkStyled} from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <NavWrap>
      <nav>
        <LinkStyled to="/">Головна</LinkStyled>

        

        <LinkStyled to="/catalog">Каталог</LinkStyled>
        
<LinkStyled to="/price">Прайс</LinkStyled>
      </nav>
     
    </NavWrap>
  );
};

export default Navigation;
