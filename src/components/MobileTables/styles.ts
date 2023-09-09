import styled, { css } from "styled-components";

const mobileStyles = css`
  @media (max-width: 768px) {
    display: inline-table;
    max-width: 400px;
    min-width: 310px;
  }
`;

export const PageListContainer = styled.table`
  ${mobileStyles}
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  tr {
    border: 1px solid #bbbbbb;
  }

  td {
    border: none;
    padding: 4px;
    text-align: left;
  }

  @media (min-width: 768px) {
    display: none; /* Esconder em dispositivos móveis */
  }
`;

export const StyledActionButtons = styled.td`
  display: flex;
  gap: 10px;
  border: none;
`;
