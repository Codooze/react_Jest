import { render } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  it("should render correctly", () => {
    const { container } = render(<Application />);
    expect(container).toMatchSnapshot();
  });

  //checking a specific element in the DOM
  it("should render the input element", () => {
    const { getByLabelText } = render(<Application />);
    const inputElement = getByLabelText("Name");
    expect(inputElement).toBeInTheDocument();

    //checking the value of the input element
    expect(inputElement).toHaveValue("Vishwas");
  });

  //getbyAltText
  it("should render the image element", () => {
    const { getByAltText } = render(<Application />);
    const imageElement = getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();
  });

  //getbyTestId
  it("should render the custom element", () => {
    const { getByTestId } = render(<Application />);
    const customElement = getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
