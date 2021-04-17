import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  min-height: 350px;
`;

export const SizePanel = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Characteristics = styled.div`
  padding-bottom: 25px;
  flex-direction: column;
  max-width: 30%;
`;

export const ButtonContainer = styled.div`
  margin-right: 10px;
  padding-bottom: 25px;
`;

export const CustomButton = styled(Button)`
  && {
    color: white;
    background-color: #f62a4f;
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
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

export const SizeDiv = styled.div`
  margin-top: 2px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #555555;
  padding-bottom: 25px;
`;

export const Output = styled.div`
  font-size: ${props => `${props.fontSize}px`};
  color: #555555;
  font-weight: ${props => props.bold ? 'bold':'normal'};
  font-style: ${props => props.italic ? 'italic':'normal'};
  text-decoration: ${props => props.underline ? 'underline' : 'normal'}
`;


