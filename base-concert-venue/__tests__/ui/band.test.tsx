import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";

test("Band component displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });

  expect(heading).toBeInTheDocument();
});

test("Band component displays correct band information", () => {
  render(<BandComponent band={null} error="fake data fail to load" />);

  const errorMsg = screen.getByRole("heading", {
    name: /fake data fail to load/i,
  });

  expect(errorMsg).toBeInTheDocument();
});
