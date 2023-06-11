import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("Reservation shows correct available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);
  const seatCountText = await screen.findByText(/10 seats left/i);

  expect(seatCountText).toBeInTheDocument();
});

test("ReservationPage shows sold out msg and no purchase button when not seats available", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/Show is sold out!/i);
  expect(seatCountText).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", {
    name: /purchase/i,
  });
  expect(purchaseButton).not.toBeInTheDocument();
});
