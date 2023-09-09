import React from "react";
import { LoadingContainer, Spinner } from "./styles";

interface LoadingProps {
  isLoading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return isLoading ? (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  ) : null;
};
