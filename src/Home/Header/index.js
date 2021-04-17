import React from 'react';
import {Container, LineText, BoldLineText} from './styles';

const Header = () => {
  return (
    <Container>
      <LineText>
        Painel
      </LineText>
      <LineText>
        para estilização de
      </LineText>
      <BoldLineText>
        mensagens.
      </BoldLineText>
    </Container>
  ); 
}

export default Header;