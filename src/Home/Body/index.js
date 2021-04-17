import React, {useState} from 'react';
import { FormControl, FormControlLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CustomCheckbox from '../../Components/CustomCheckbox';
import {Container, Characteristics, Output, Title, SizePanel, ButtonContainer, CustomButton, SizeDiv} from './styles';

const Body = () => {
  const [style, setStyle] = useState({bold: true, underline: false, italic: false, fontSize: 64});

  const handleChange = (event) => {
    setStyle({ ...style, [event.target.name]: event.target.checked });
  };

  const increaseFontSize = () => {
    setStyle({...style, fontSize: style.fontSize + 1})
  }

  const decreaseFontSize = () => {
    setStyle({...style, fontSize: style.fontSize - 1})
  }

  return (
    <Container>
      <FormControl>
      <Title>Características:</Title>
      <Characteristics>
        <FormControlLabel
          control={<CustomCheckbox checked={style.bold} onChange={handleChange} name="bold" />}
          label="Negrito"
        />
        <FormControlLabel
          control={<CustomCheckbox checked={style.underline} onChange={handleChange} name="underline" />}
          label="Sobrescrito"
        />
        <FormControlLabel
          control={<CustomCheckbox checked={style.italic} onChange={handleChange} name="italic" />}
          label="Italico"
        />
      </Characteristics>
      <Title>Tamanho da fonte:</Title>
      <SizePanel>
        <ButtonContainer>
          <CustomButton onClick={decreaseFontSize}>
            <RemoveIcon style={{fontSize: '15px'}} />
          </CustomButton>
        </ButtonContainer>
        
        <ButtonContainer>
          <CustomButton onClick={increaseFontSize}>
            <AddIcon style={{fontSize: '15px'}} />
          </CustomButton>
        </ButtonContainer>

        <SizeDiv>
          {`${style.fontSize}px`}
        </SizeDiv>
      </SizePanel>
      
      <Title>Previa:</Title>

      <Output bold={style.bold} underline={style.underline} italic={style.italic} fontSize={style.fontSize} >Use Máscara!</Output>
            
    </FormControl>
  </Container>
  ); 
}

export default Body;