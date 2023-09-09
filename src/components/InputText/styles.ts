import styled from 'styled-components'

import { thisCompStyle } from './types'

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

export const Input = styled.input<thisCompStyle>`
  background-color: ${({ theme, color }) =>
    color ? theme.palette[color]?.main : theme.palette.white.main};

  color: ${({ theme }) => theme.palette.black.main};
  border: 0;
  border-bottom: 1px solid  ${({ theme }) => theme.palette.black.main};
  padding: 16px 16px;
  width: ${({ widthInput }) => widthInput ? `${widthInput}%` : '100%'};
  margin-bottom: 10px;

  &::placeholder{
    color: ${({ theme }) => theme.palette.black.dark};
  }

  &:focus{
    border: 0;
    border-bottom: 1px solid  ${({ theme }) => theme.palette.primary.main};
  }

  ${({ disabled, theme }) => disabled ? `
    background: ${theme.palette.black.light};
    cursor: not-allowed;
    `: ''};

  ${({ theme, error }) => error ? `
    border: 0;
    border-bottom: 1px solid  ${theme.palette.alertDanger.main};
    ` : ''};
`;
export const Label = styled.span<thisCompStyle>`
  transition: .1s;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme, error }) =>
    error ? theme.palette.alertDanger.main : theme.palette.black.dark};

  color: ${({ theme, focus }) =>
  focus ? theme.palette.black.main : theme.palette.black.dark};
`;


export const LabelError = styled.span<thisCompStyle>`
  /* background-color: ${({ theme, backgroundInput, focus }) => backgroundInput ? focus && backgroundInput : focus && theme.palette.white.main}; */
  color: ${({ theme }) => theme.palette.alertDanger.main};
  font-size: 0.8rem;
  position: absolute;
  padding-top: 8px;
  bottom: -10px;
  left: 2px;
`;
