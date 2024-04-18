import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  const user = userEvent.setup();

  it("should allow the user to enter their wish", async () => {
    render(<App />);
    const input = screen.getByRole("textbox", { name: "wish input" });
    await user.type(input, "a wish");
    expect(input).toHaveValue("a wish");
  });

  it("should enable button after a wish is entered", async () => {
    render(<App />);
    await user.type(
      screen.getByRole("textbox", { name: "wish input" }),
      "a wish"
    );
    expect(screen.getByRole("button", { name: "Submit wish" })).toBeEnabled();
  });

  it("should replace the wish entry area with the wish after submission", async () => {
    render(<App />);
    await user.type(
      screen.getByRole("textbox", { name: "wish input" }),
      "a wish"
    );
    expect(screen.queryByRole("heading", { name: "Your wish is" })).toBeNull();
    await user.click(screen.getByRole("button", { name: "Submit wish" }));
    expect(screen.getByText("a wish", { exact: true })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Make a wish" })).toBeNull();
  });
});
