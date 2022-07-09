import { render, screen } from "@testing-library/react";
import Sampler from "../components/Sampler";
import "@testing-library/jest-dom";
import { demoKit } from "../data/demoKit";

describe("Sampler", () => {
  it("renders 9 buttons", () => {
    render(<Sampler samplesKit={demoKit} />);

    const pads = screen.getAllByRole("button");
    expect(pads.length).toEqual(9);
  });
});
