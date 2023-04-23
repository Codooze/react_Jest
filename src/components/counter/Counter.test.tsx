import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  it("should render correctly", () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });

  it("renders a counter with initial value 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { name: /0/i });
    expect(countElement).toBeInTheDocument();
  });

  it("renders with a count increment of 1", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading", { name: /1/i });
    expect(countElement).toBeInTheDocument();
  });

  it("renders with a count increment of 5", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const numberOfClicks = 5;
    for (let i = 0; i < numberOfClicks; i++) {
      await userEvent.click(incrementButton);
    }
    const countElement = screen.getByRole("heading", { name: /5/i });
    expect(countElement).toBeInTheDocument();
  });

  it("rendres a count of 10 after clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set" });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });
});
