import React from "react";
import { render } from "@testing-library/react";
import { Loading } from ".";
import MockTheme from "components/MockTheme";

describe("Loading Component", () => {
  it("renders spinner when isLoading is true", () => {
    render(
      <MockTheme>
        <Loading isLoading={true} />
      </MockTheme>
    );
  });
});
