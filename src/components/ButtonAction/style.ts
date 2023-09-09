import styled from 'styled-components';

import { thisCompStyle } from './types'

export const Container = styled.div<thisCompStyle>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  border-radius: 50px;
  padding: 5px;
  margin-left: 2px;
  margin-right: 2px;
  color: #efeeed;
  text-align: center;
  background-color: #00c8b3;

  cursor: pointer;
  
  &:hover{
    ${({ disabled }) => disabled ? `` : `opacity: 0.75;`};
  }
  
  ${({ disabled }) => disabled ? `
  cursor: not-allowed;
  color: #f6f6f6;
  background-color: #dddcdc;
` : ``};
`;