import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "contexts/Auth";
import { Layout, Loading } from "components";
import * as Pages from "../pages";

export const MyRoutes = () => {
  const { isLoading } = useAuth();

  if (isLoading)
    return (
      <>
        <Loading isLoading={isLoading} />
      </>
    );

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Pages.List />} />
          <Route path="/form" element={<Pages.Form />} />
          <Route path="/form/view/:cpf" element={<Pages.Form />} />
          <Route path="/form/edit/:cpf" element={<Pages.Form />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
