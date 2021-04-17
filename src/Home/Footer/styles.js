import styled from 'styled-components';
import { Button } from '@material-ui/core';
import waveSvg from './wave.svg';

export const Container = styled.div`
  padding: 30px;
  border-radius: 10px;
  color: #948c8e;
  min-height: 50px;
  background-image: ${`url(${waveSvg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    align-items: center;
`;

export const CustomButton = styled(Button)`
  && {
    color: white;
    background-color: #f62a4f;
    height: 30px;
    width: 130px;
    font-size: 10px;
  }
  &&:hover {
    background-color: #831327;
  }
  &&:disabled {
    color: white;
    background-color: #ffc1cc;
  }
`;

export const Message = styled.span`
  color: #948d8e;
  flex: 60%; 
`;

export const ButtonContainer = styled.span`
  flex: 20%;
`;