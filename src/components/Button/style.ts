import styled from "styled-components";

import { thisCompStyle } from "./types";

export const Container = styled.div<thisCompStyle>`
  border: 0;
  border-radius: 50px;
  padding: 16px 24px;
  color: #efeeed;
  text-align: center;
  background-color: #00c8b3;
  margin-top: 24px;

  cursor: pointer;

  &:hover {
    ${({ disabled }) => (disabled ? `` : `opacity: 0.75;`)};
  }

  ${({ disabled }) =>
    disabled
      ? `
    cursor: not-allowed;
    color: #f6f6f6;
    background-color: #dddcdc;
  `
      : ``};
`;
