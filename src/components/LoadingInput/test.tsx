import React from "react";
import { render } from "@testing-library/react";
import { LoadingInput } from ".";
import MockTheme from "components/MockTheme";

describe("Loading Component", () => {
  it("renders without errors", () => {
    render(
      <MockTheme>
        <LoadingInput />
      </MockTheme>
    );
  });
});
