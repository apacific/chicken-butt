import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OrderCard from '@/components/cards/OrderCard';
import { OrderProvider } from '@/context/OrderContext';
import '@testing-library/jest-dom';

describe('OrderCard', () => {
  const mockOnBack = jest.fn();
  const mockOnCloseToMenu = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithContext = () => {
    return render(
      <OrderProvider>
        <OrderCard onBack={mockOnBack} onCloseToMenu={mockOnCloseToMenu} />
      </OrderProvider>
    );
  };

  it('renders the order header', () => {
    renderWithContext();

    expect(screen.getByText('Your Order')).toBeInTheDocument();
  });

  it('renders back button', () => {
    renderWithContext();

    const backButton = screen.getByLabelText('Back');
    expect(backButton).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', async () => {
    const user = userEvent.setup();
    renderWithContext();

    const backButton = screen.getByLabelText('Back');
    await user.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('displays empty order message when no items', () => {
    renderWithContext();

    expect(screen.getByText('No items yet.')).toBeInTheDocument();
  });

  it('displays total price of 0.00 when order is empty', () => {
    renderWithContext();

    expect(screen.getByText('$0.00')).toBeInTheDocument();
  });

  it('renders Checkout button', () => {
    renderWithContext();

    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });

  it('renders Return to Menu button', () => {
    renderWithContext();

    expect(screen.getByText('Return to Menu')).toBeInTheDocument();
  });

  it('calls onCloseToMenu when Return to Menu button is clicked', async () => {
    const user = userEvent.setup();
    renderWithContext();

    const returnButton = screen.getByText('Return to Menu');
    await user.click(returnButton);

    expect(mockOnCloseToMenu).toHaveBeenCalledTimes(1);
  });

  it('does not render Clear Order button when order is empty', () => {
    renderWithContext();

    expect(screen.queryByText('Clear order')).not.toBeInTheDocument();
  });

  it('renders Total label', () => {
    renderWithContext();

    const totalLabels = screen.getAllByText('Total');
    expect(totalLabels.length).toBeGreaterThan(0);
  });

  it('renders correct layout with buttons', () => {
    const { container } = renderWithContext();

    // Check for main container
    const mainDiv = container.querySelector('div.h-full.w-full.p-6');
    expect(mainDiv).toBeInTheDocument();

    // Check for button group
    const buttonGroup = container.querySelector('div.flex.gap-3');
    expect(buttonGroup).toBeInTheDocument();
  });
});
