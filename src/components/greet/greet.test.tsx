/*
    Greet should render the hello and if a name is passed into the component it should render the name
*/

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  it("should render the hello and if a name is passed into the component it should render the name", () => {
    render(<Greet />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  it("Greet renders with a name", () => {
    render(<Greet name="Jeison" />);
    expect(screen.getByText(`Hello Jeison`)).toBeInTheDocument();
  });
});
