import { render, screen } from "../test-utils";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../providers/app-providers";

//Using wrapper, check test-utils.tsx
describe("MuiMode", () => {
  it("renders text correctly", () => {
    render(<MuiMode />);
    const textElement = screen.getByText(/dark mode/i);
    expect(textElement).toBeInTheDocument();
  });
});
