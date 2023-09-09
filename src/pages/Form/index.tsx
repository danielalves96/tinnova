import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button, InputText } from "components";
import { registerData } from "@types";
import { postInDb, getItem, updatePost } from "utils/dbActions";
import { maskCPF, maskPhone } from "utils/masks";
import { isValidCPF, isValidEmail } from "utils/functions";
import { StyledTableContainer } from "pages/List/styles";

const PageForm: React.FC = () => {
  const initialValues = { name: "", email: "", cpf: "", phone: "" };
  const [isEdit, setIsEdit] = useState("");
  const [loading, setLoading] = useState(false);
  const [isView, setIsView] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState(initialValues as registerData);

  let { cpf } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (cpf) {
      (async () => {
        const data = await getItem(cpf);
        setFormData(data);
        setIsEdit(data.cpf);
      })();
    }

    setIsView(location.pathname.split("/")[2] === "view");
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.trim().length === 0) {
      newErrors.name = "O nome é obrigatório";
    } else if (formData.name.length < 3) {
      newErrors.name = "O nome deve ter pelo menos 3 caracteres";
    }

    if (formData.email === "") {
      newErrors.email = "E-mail é obrigatório";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "E-mail é inválido";
    }

    if (formData.cpf === "" || !isValidCPF(formData.cpf)) {
      newErrors.cpf = "CPF é inválido";
    }

    if (formData.phone === "") {
      newErrors.phone = "Telefone é obrigatório";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    if (isView) {
      navigate("/");
    } else {
      isEdit ? updatePost(isEdit, formData) : postInDb(formData);
    }

    setFormData(initialValues);
    setLoading(false);
    navigate("/");
  };

  return (
    <>
      <InputText
        label="Nome completo"
        placeholder="Digite seu nome"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, name: e.target.value });
          setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
        }}
        name="name"
        error={errors.name}
        disabled={isView}
        value={formData?.name}
      />

      <InputText
        label="E-mail"
        placeholder="Digite seu e-mail"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, email: e.target.value });
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }}
        name="email"
        error={errors.email}
        disabled={isView}
        value={formData?.email}
      />

      <InputText
        label="CPF"
        placeholder="Digite seu CPF"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value.replace(/\D/g, "");
          const cpf = maskCPF(value);
          setFormData({ ...formData, cpf });
          setErrors((prevErrors) => ({ ...prevErrors, cpf: "" }));

          if (value.length === 11 && !isValidCPF(value)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              cpf: "CPF é inválido",
            }));
          }
        }}
        maxLength={14}
        name="cpf"
        error={errors.cpf}
        disabled={isView}
        value={formData?.cpf}
      />

      <InputText
        label="Telefone"
        placeholder="Digite seu telefone"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value.replace(/\D/g, "");
          const phone = maskPhone(value);
          setFormData({ ...formData, phone });
          setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
        }}
        maxLength={15}
        name="phone"
        error={errors.phone}
        disabled={isView}
        value={formData?.phone}
      />

      <StyledTableContainer>
        <Button
          label={isEdit ? (isView ? "VOLTAR" : "ATUALIZAR") : "GUARDAR"}
          onClick={handleOnSubmit}
          isLoading={loading}
        />
      </StyledTableContainer>
    </>
  );
};

export default PageForm;
