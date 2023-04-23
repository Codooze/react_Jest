import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counterTwo";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  it("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText(/count/i);
    expect(textElement).toBeInTheDocument();
  });

  it("handlers are called correctly", async () => {
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(handleIncrement).toBeCalledTimes(1);
    expect(handleDecrement).toBeCalledTimes(1);
  });
});
