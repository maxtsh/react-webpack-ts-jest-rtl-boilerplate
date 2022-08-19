import { screen, render } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  test("Renders", () => {
    render(<Home />);
    expect(screen.getByRole("title")).toBeInTheDocument();
  });
});
