import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });

  it("should render learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
