import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  it("should render correctly", () => {
    const { container } = render(<Skills skills={["HTML", "CSS", "JS"]} />);
    expect(container).toMatchSnapshot();
  });

  it("should render the button element", () => {
    const { getByText, getByRole } = render(
      <Skills skills={["HTML", "CSS", "JS"]} />
    );
    const buttonElement = getByText("Login");
    expect(buttonElement).toBeInTheDocument();

    //getByRole
    const buttonElement2 = getByRole("button");
    expect(buttonElement2).toBeInTheDocument();
  });

  //render the skills list
  it("should render the skills list", () => {
    render(<Skills skills={["HTML", "CSS", "JS"]} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  //renders button
  it("should render the button element 2", () => {
    render(<Skills skills={["HTML", "CSS", "JS"]} />);
    const buttonElement = screen.getByRole("button", { name: /login/i });

    expect(buttonElement).toBeInTheDocument();
  });

  //start learning button is not rendered
  it("should not render the start learning button", () => {
    render(<Skills skills={["HTML", "CSS", "JS"]} />);
    const buttonElement = screen.queryByRole("button", {
      name: /start learning/i,
    });

    expect(buttonElement).not.toBeInTheDocument();
  });

  //start learning button is eventually rendered
  it("should render the start learning button", async () => {
    render(<Skills skills={["HTML", "CSS", "JS"]} />);
    const buttonElement = await screen.findByRole("button", {
      name: /start learning/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
