import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders 9 buttons", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: /React MPC-2022 JS/i });
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /\+ info about AKAI MPC/i });
    expect(link).toBeInTheDocument();
  });
});
