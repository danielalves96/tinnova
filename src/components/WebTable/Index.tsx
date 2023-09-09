import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineZoomIn
} from "react-icons/ai";
import { removePost } from "utils/dbActions";
import { maskCPF, maskPhone } from "utils/masks";
import { ButtonAction } from "components";
import { StyledActionButtons, StyledTable } from "./styles";


export function WebTable({ data }: any) {
  const navigate = useNavigate();
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.name}</td>
              <td>{maskPhone(row.phone)}</td>
              <td>{row.email}</td>
              <td>{maskCPF(row.cpf)}</td>
              <div>
                <StyledActionButtons>
                  <ButtonAction
                    onClick={() => {
                      navigate(`/form/view/${row.cpf}`);
                    }}
                  >
                    <AiOutlineZoomIn />
                  </ButtonAction>
                  <ButtonAction
                    onClick={() => {
                      navigate(`/form/edit/${row.cpf}`);
                    }}
                  >
                    <AiOutlineEdit />
                  </ButtonAction>
                  <ButtonAction
                    onClick={() => {
                      swal({
                        title: "Deseja mesmo remover?",
                        icon: "warning",
                        dangerMode: true,
                        buttons: ["Não", "Sim"],
                      }).then((willDelete) => {
                        if (willDelete) {
                          removePost(row);
                          window.location.reload();
                        }
                      });
                    }}
                  >
                    <AiOutlineDelete />
                  </ButtonAction>
                </StyledActionButtons>
              </div>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}
