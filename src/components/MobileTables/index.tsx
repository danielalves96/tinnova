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
import { PageListContainer, StyledActionButtons } from "./styles";

export function MobileTables({ data }: any) {
  const navigate = useNavigate();
  return (
    <div>
      {data.map((row, rowIndex) => (
        <PageListContainer>
          <tbody key={rowIndex}>
            <tr>
              <td>Nome:</td>
              <td>{row.name}</td>
            </tr>
            <tr>
              <td>Telefone:</td>
              <td>{maskPhone(row.phone)}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{row.email}</td>
            </tr>
            <tr>
              <td>CPF:</td>
              <td>{maskCPF(row.cpf)}</td>
            </tr>
            <tr>
              <td>Ações:</td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </PageListContainer>
      ))}
    </div>
  );
}
