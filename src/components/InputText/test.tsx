import React from "react";
import { render } from "@testing-library/react";

import { InputText } from ".";

import MockTheme from "components/MockTheme";

describe("InputText Component", () => {
  it("renders without errors", () => {
    render(
      <MockTheme>
        <InputText
          placeholder="Placeholder"
          label="Label"
          onChange={() => {}}
        />
      </MockTheme>
    );
  });
});
