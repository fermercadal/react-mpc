import { render, screen, fireEvent } from "@testing-library/react";
import Pad from "../components/Pad";
import "@testing-library/jest-dom";

const PAD_PROPS = {
  sample: {
    padKey: "E",
    padName: "Trumpet",
    sound: "trumpet",
  },
  playSound: jest.fn(),
  setPressed: jest.fn(),
};

describe("Pad", () => {
  it("renders a button and triggers functions on click", () => {
    render(<Pad {...PAD_PROPS} />);

    const pad = screen.getByRole("button", { name: /E/i });
    expect(pad).toBeInTheDocument();

    fireEvent.click(pad);
    expect(PAD_PROPS.playSound).toHaveBeenCalledTimes(1);
    expect(PAD_PROPS.setPressed).toHaveBeenCalledTimes(1);
  });
});
