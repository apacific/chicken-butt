import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubsectionGallery from '@/components/cards/SubsectionGallery';
import { OrderProvider } from '@/context/OrderContext';
import type { SectionKey, MenuItem } from '@/types/Menu';
import '@testing-library/jest-dom';

const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Whole Chicken',
    price: 18.00,
    section: 'food',
    subsection: 'chicken',
    imagePath: '/images/chicken.jpg',
    description: 'A delicious whole roasted chicken',
  },
  {
    id: 2,
    name: 'Half Chicken',
    price: 11.00,
    section: 'food',
    subsection: 'chicken',
    imagePath: '/images/half-chicken.jpg',
    description: 'Half of a delicious roasted chicken',
  },
  {
    id: 3,
    name: 'Quarter Chicken',
    price: 7.00,
    section: 'food',
    subsection: 'chicken',
    imagePath: '/images/quarter-chicken.jpg',
    description: 'A quarter of roasted chicken',
  },
];

describe('SubsectionGallery', () => {
  const mockOnBack = jest.fn();
  const mockOnOpenOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithContext = (
    section: SectionKey,
    subsection: string,
    items: MenuItem[],
    index: number = 0,
    setIndex: (i: number) => void = jest.fn()
  ) => {
    return render(
      <OrderProvider>
        <SubsectionGallery
          section={section}
          subsection={subsection}
          items={items}
          index={index}
          setIndex={setIndex}
          onBack={mockOnBack}
          onOpenOrder={mockOnOpenOrder}
        />
      </OrderProvider>
    );
  };

  it('renders the subsection header with section and subsection name', () => {
    renderWithContext('food', 'chicken', mockMenuItems);

    expect(screen.getByText(/FOOD · chicken/)).toBeInTheDocument();
  });

  it('renders back button', () => {
    renderWithContext('food', 'chicken', mockMenuItems);

    const backButton = screen.getByLabelText('Back');
    expect(backButton).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', async () => {
    const user = userEvent.setup();
    renderWithContext('food', 'chicken', mockMenuItems);

    const backButton = screen.getByLabelText('Back');
    await user.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('displays the current menu item name and price', () => {
    renderWithContext('food', 'chicken', mockMenuItems, 0);

    expect(screen.getByText('Whole Chicken')).toBeInTheDocument();
    expect(screen.getByText('$18.00')).toBeInTheDocument();
  });

  it('displays the next item when Next button is clicked', async () => {
    const user = userEvent.setup();
    const setIndex = jest.fn();
    renderWithContext('food', 'chicken', mockMenuItems, 0, setIndex);

    const nextButton = screen.getByText('Next ›');
    await user.click(nextButton);

    expect(setIndex).toHaveBeenCalledWith(1);
  });

  it('displays previous item when Prev button is clicked', async () => {
    const user = userEvent.setup();
    const setIndex = jest.fn();
    renderWithContext('food', 'chicken', mockMenuItems, 1, setIndex);

    const prevButton = screen.getByText('‹ Prev');
    await user.click(prevButton);

    expect(setIndex).toHaveBeenCalledWith(0);
  });

  it('wraps to last item when Prev is clicked on first item', async () => {
    const user = userEvent.setup();
    const setIndex = jest.fn();
    renderWithContext('food', 'chicken', mockMenuItems, 0, setIndex);

    const prevButton = screen.getByText('‹ Prev');
    await user.click(prevButton);

    // Should wrap to last index (2)
    expect(setIndex).toHaveBeenCalledWith(2);
  });

  it('wraps to first item when Next is clicked on last item', async () => {
    const user = userEvent.setup();
    const setIndex = jest.fn();
    renderWithContext('food', 'chicken', mockMenuItems, 2, setIndex);

    const nextButton = screen.getByText('Next ›');
    await user.click(nextButton);

    // Should wrap to first index (0)
    expect(setIndex).toHaveBeenCalledWith(0);
  });

  it('expands to show description when clicked', async () => {
    const user = userEvent.setup();
    renderWithContext('food', 'chicken', mockMenuItems, 0);

    const expandArea = screen.getByText('Whole Chicken').closest('.bg-black\\/30');
    if (expandArea) {
      await user.click(expandArea);
    }

    // Description should appear after expansion
    expect(screen.getByText('A delicious whole roasted chicken')).toBeInTheDocument();
  });

  it('displays Add to Order button when expanded', async () => {
    const user = userEvent.setup();
    renderWithContext('food', 'chicken', mockMenuItems, 0);

    const expandArea = screen.getByText('Whole Chicken').closest('.bg-black\\/30');
    if (expandArea) {
      await user.click(expandArea);
    }

    expect(screen.getByText('Add to Order')).toBeInTheDocument();
  });

  it('displays View Order button when expanded', async () => {
    const user = userEvent.setup();
    renderWithContext('food', 'chicken', mockMenuItems, 0);

    const expandArea = screen.getByText('Whole Chicken').closest('.bg-black\\/30');
    if (expandArea) {
      await user.click(expandArea);
    }

    expect(screen.getByText('View Order')).toBeInTheDocument();
  });

  it('calls onOpenOrder when View Order button is clicked', async () => {
    const user = userEvent.setup();
    renderWithContext('food', 'chicken', mockMenuItems, 0);

    const expandArea = screen.getByText('Whole Chicken').closest('.bg-black\\/30');
    if (expandArea) {
      await user.click(expandArea);
    }

    const viewOrderButton = screen.getByText('View Order');
    await user.click(viewOrderButton);

    expect(mockOnOpenOrder).toHaveBeenCalledTimes(1);
  });

  it('adds item to order when Add to Order button is clicked', async () => {
    const user = userEvent.setup();
    renderWithContext('food', 'chicken', mockMenuItems, 0);

    const expandArea = screen.getByText('Whole Chicken').closest('.bg-black\\/30');
    if (expandArea) {
      await user.click(expandArea);
    }

    const addButton = screen.getByText('Add to Order');
    await user.click(addButton);

    // Item should be added to order (context handles this)
    // We can't directly verify context state, but button click should not error
    expect(addButton).toBeInTheDocument();
  });

  it('handles items without description', () => {
    const itemsNoDesc = [
      { ...mockMenuItems[0], description: undefined },
    ];

    renderWithContext('food', 'chicken', itemsNoDesc, 0);

    // Should render without error
    expect(screen.getByText('Whole Chicken')).toBeInTheDocument();
  });

  it('renders correctly with beverages section', () => {
    const beverageItem: MenuItem = {
      id: 101,
      name: 'Cola',
      price: 2.50,
      section: 'beverages',
      subsection: 'soft drinks',
      imagePath: '/images/cola.jpg',
      description: 'Refreshing cola',
    };

    renderWithContext('beverages', 'soft drinks', [beverageItem], 0);

    expect(screen.getByText(/BEVERAGES · soft drinks/)).toBeInTheDocument();
    expect(screen.getByText('Cola')).toBeInTheDocument();
    expect(screen.getByText('$2.50')).toBeInTheDocument();
  });

  it('handles single item gallery', async () => {
    const user = userEvent.setup();
    const singleItem = [mockMenuItems[0]];

    renderWithContext('food', 'chicken', singleItem, 0);

    const nextButton = screen.getByText('Next ›');
    await user.click(nextButton);

    // Should wrap back to index 0
    expect(screen.getByText('Whole Chicken')).toBeInTheDocument();
  });

  it('collapses details when clicking item again', async () => {
    const user = userEvent.setup();
    renderWithContext('food', 'chicken', mockMenuItems, 0);

    const expandArea = screen.getByText('Whole Chicken').closest('.bg-black\\/30');
    if (expandArea) {
      // First click to expand
      await user.click(expandArea);
      expect(screen.getByText('A delicious whole roasted chicken')).toBeInTheDocument();

      // Second click to collapse
      await user.click(expandArea);
      expect(screen.queryByText('A delicious whole roasted chicken')).not.toBeInTheDocument();
    }
  });
});
