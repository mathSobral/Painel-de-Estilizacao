import React, {useState} from 'react';

import {Container, FormActions, Message, ButtonContainer, CustomButton} from './styles';

const Footer = () => {
  const [isMessageSended, setisMessageSended] = useState(false);
  const [isSendingMessage, setisSendingMessage] = useState(false);
  
  const sendMessage = () => {
    setisMessageSended(false);
    setisSendingMessage(true)
    setTimeout(() => {
      setisSendingMessage(false);
      setisMessageSended(true);
      setTimeout(() => setisMessageSended(false), 2000);
    }, 3000);
    
  }

  return (
    <Container>
      <FormActions>
          <Message>
          {isSendingMessage ? 'Enviando configuração...' : ''}
          {isMessageSended ? 'Configuração enviada!' : ''}
          
        </Message>
        <ButtonContainer>
          <CustomButton disabled={isSendingMessage} onClick={sendMessage} >
            Enviar
          </CustomButton>
        </ButtonContainer>
      </FormActions>
    </Container>
  ); 
}

export default Footer;