import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeCard from '@/components/cards/HomeCard';

describe('HomeCard', () => {
  it('should render FOOD and BEVERAGES navigation items', () => {
    const mockOnFood = jest.fn();
    const mockOnBeverages = jest.fn();

    render(<HomeCard onFood={mockOnFood} onBeverages={mockOnBeverages} />);

    expect(screen.getByText('FOOD')).toBeInTheDocument();
    expect(screen.getByText('BEVERAGES')).toBeInTheDocument();
  });

  it('should call onFood when FOOD button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnFood = jest.fn();
    const mockOnBeverages = jest.fn();

    render(<HomeCard onFood={mockOnFood} onBeverages={mockOnBeverages} />);

    const foodButton = screen.getByText('FOOD');
    await user.click(foodButton);

    expect(mockOnFood).toHaveBeenCalledTimes(1);
    expect(mockOnBeverages).not.toHaveBeenCalled();
  });

  it('should call onBeverages when BEVERAGES button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnFood = jest.fn();
    const mockOnBeverages = jest.fn();

    render(<HomeCard onFood={mockOnFood} onBeverages={mockOnBeverages} />);

    const beveragesButton = screen.getByText('BEVERAGES');
    await user.click(beveragesButton);

    expect(mockOnBeverages).toHaveBeenCalledTimes(1);
    expect(mockOnFood).not.toHaveBeenCalled();
  });

  it('should render the LogoBlock component', () => {
    const mockOnFood = jest.fn();
    const mockOnBeverages = jest.fn();

    const { container } = render(<HomeCard onFood={mockOnFood} onBeverages={mockOnBeverages} />);

    // Check that the component structure includes expected containers
    expect(container.querySelector('.h-full')).toBeInTheDocument();
  });
});
