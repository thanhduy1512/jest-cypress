import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

test("Correct title and img", () => {
  render(<Home />);

  const title = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });

  expect(title).toBeInTheDocument();

  const img = screen.getByRole("img", {
    name: "Concert goer with hands in the shape of a heart",
  });

  expect(img).toBeInTheDocument();
});
