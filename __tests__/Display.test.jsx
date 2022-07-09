import { render, screen } from "@testing-library/react";
import Display from "../components/Display";
import "@testing-library/jest-dom";

describe("Display", () => {
  it("displays the sample name", () => {
    render(<Display text="Example Sample" />);

    const display = screen.getByText(/Example Sample/i);
    expect(display).toBeInTheDocument();
  });
});
