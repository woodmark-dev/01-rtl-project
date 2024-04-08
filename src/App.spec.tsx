import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  const user = userEvent.setup();

  it("should allow the user to enter their wish", async () => {
    render(<App />);
    await user.type(screen.getByLabelText("wish input"), "a wish");
  });

  it("should enable button after a wish is entered", async () => {
    render(<App />);
    await user.type(screen.getByLabelText("wish input"), "a wish");
    expect(screen.getByText("Submit wish")).toBeEnabled();
  });

  it("should replace the wish entry area with the wish after submission", async () => {
    render(<App />);
    await user.type(screen.getByLabelText("wish input"), "a wish");
    expect(screen.queryByText("Your wish is")).toBeNull();
    await user.click(screen.getByText("Submit wish"));
    expect(screen.getByText("a wish")).toBeInTheDocument();
    expect(screen.queryByText("Make a wish")).toBeNull();
  });
});
