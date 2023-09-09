import styled from "styled-components";

export const StyledActionButtons = styled.td`
  display: flex;
  gap: 10px;
  border: none;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    display: none; /* Esconder em dispositivos móveis */
  }
`;
