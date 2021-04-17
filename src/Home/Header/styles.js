import styled from 'styled-components';
import waveSvg from './wave.svg';

export const Container = styled.div`
  padding: 30px;
  border-radius: 10px;
  color: #948c8e;
  min-height: 90px;
  background-image: ${`url(${waveSvg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 20px;
`;

export const LineText = styled.div`
`;

export const BoldLineText = styled.div`
  color: #555555;
  font-weight: bold;
`;