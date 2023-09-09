import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getList, getFirstList } from "utils/dbActions";
import { registerData } from "@types";
import { Button } from "components";
import { useList } from "contexts/List";
import { useAuth } from "contexts/Auth";
import { WebTable } from "../../components/WebTable/Index";
import { MobileTables } from "../../components/MobileTables";
import { StyledTableContainer, ButtonContainer } from "./styles";

const PageList: React.FC = () => {
  const [data, setData] = useState<registerData[]>([] as registerData[]);
  const { isPopulated, handleOnSet } = useList();
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  useEffect(() => {
    handleLogin();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData: any = getList();

      if (fetchedData.length === 0) {
        if (isPopulated === "true") {
          return;
        }

        const firstData: any = await getFirstList();
        setData(firstData);
        handleOnSet();
      } else {
        setData(fetchedData);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledTableContainer>
      {data.length === 0 ? (
        <h3>Sem dados</h3>
      ) : (
        <>
          <WebTable data={data} />
          <MobileTables data={data}></MobileTables>
        </>
      )}

      <ButtonContainer>
        <Button label="Adicionar" onClick={() => navigate("./form")} />
      </ButtonContainer>
    </StyledTableContainer>
  );
};

export default PageList;
