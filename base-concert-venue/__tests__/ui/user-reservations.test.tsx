import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("User Reservations when user purchased tickets", async () => {
  render(<UserReservations userId={1} />);
  const buttonText = await screen.findByRole("button", {
    name: /Purchase more tickets/i,
  });

  expect(buttonText).toBeInTheDocument();
});

test("User Reservations when user DID NOT purchased tickets", async () => {
  render(<UserReservations userId={0} />);
  const buttonText = await screen.findByRole("button", {
    name: /Purchase tickets/i,
  });
  expect(buttonText).toBeInTheDocument();

  const headingText = screen.queryByRole("heading", {
    name: /Your tickets/i,
  });
  expect(headingText).not.toBeInTheDocument();
});
