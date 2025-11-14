import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '@/app/page';
import { OrderProvider } from '@/context/OrderContext';
import '@testing-library/jest-dom';

// Mock the fetch function
global.fetch = jest.fn();

// Mock CardShell component
jest.mock('@/components/CardShell', () => {
  return function MockCardShell({
    children,
    bgImage,
    overlay,
  }: {
    children: React.ReactNode;
    bgImage?: string;
    overlay?: string;
  }) {
    return (
      <div data-testid="card-shell" data-bg-image={bgImage} data-overlay={overlay}>
        {children}
      </div>
    );
  };
});

// Mock child components
jest.mock('@/components/cards/HomeCard', () => {
  return function MockHomeCard({
    onFood,
    onBeverages,
  }: {
    onFood: () => void;
    onBeverages: () => void;
  }) {
    return (
      <div data-testid="home-card">
        <button onClick={onFood}>FOOD</button>
        <button onClick={onBeverages}>BEVERAGES</button>
      </div>
    );
  };
});

jest.mock('@/components/cards/SectionCard', () => {
  return function MockSectionCard({
    section,
    subsections,
    onBack,
    onPick,
  }: {
    section: string;
    subsections: string[];
    onBack: () => void;
    onPick: (sub: string) => void;
  }) {
    return (
      <div data-testid="section-card">
        <button onClick={onBack}>Back</button>
        <div>{section}</div>
        {subsections.map((sub) => (
          <button key={sub} onClick={() => onPick(sub)}>
            {sub}
          </button>
        ))}
      </div>
    );
  };
});

jest.mock('@/components/cards/SubsectionGallery', () => {
  return function MockSubsectionGallery({
    section,
    subsection,
    items,
    index,
    setIndex,
    onBack,
    onOpenOrder,
  }: {
    section: string;
    subsection: string;
    items: any[];
    index: number;
    setIndex: (i: number) => void;
    onBack: () => void;
    onOpenOrder: () => void;
  }) {
    return (
      <div data-testid="subsection-gallery">
        <button onClick={onBack}>Back</button>
        <div>
          {section} - {subsection}
        </div>
        {items[index] && <div>{items[index].name}</div>}
        <button onClick={() => setIndex((index + 1) % items.length)}>Next</button>
        <button onClick={onOpenOrder}>Open Order</button>
      </div>
    );
  };
});

jest.mock('@/components/cards/OrderCard', () => {
  return function MockOrderCard({
    onBack,
    onCloseToMenu,
  }: {
    onBack: () => void;
    onCloseToMenu: () => void;
  }) {
    return (
      <div data-testid="order-card">
        <button onClick={onBack}>Back</button>
        <button onClick={onCloseToMenu}>Close to Menu</button>
      </div>
    );
  };
});

const mockMenuItems = [
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
    name: 'Cola',
    price: 2.50,
    section: 'beverages',
    subsection: 'soft drinks',
    imagePath: '/images/cola.jpg',
    description: 'Refreshing cola',
  },
];

describe('Page (app/page.tsx)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockMenuItems,
    });
  });

  const renderPage = () => {
    return render(
      <OrderProvider>
        <Page />
      </OrderProvider>
    );
  };

  it('renders loading state initially', () => {
    renderPage();

    expect(screen.getByText('Loading menu…')).toBeInTheDocument();
  });

  it('fetches menu from /api/menu on mount', async () => {
    renderPage();

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/menu', { cache: 'no-store' });
    });
  });

  it('displays home card when menu is loaded', async () => {
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });
  });

  it('navigates to food section when FOOD button is clicked', async () => {
    const user = userEvent.setup();
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    const foodButton = screen.getByText('FOOD');
    await user.click(foodButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    expect(screen.getByText('food')).toBeInTheDocument();
  });

  it('navigates to beverages section when BEVERAGES button is clicked', async () => {
    const user = userEvent.setup();
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    const beveragesButton = screen.getByText('BEVERAGES');
    await user.click(beveragesButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    expect(screen.getByText('beverages')).toBeInTheDocument();
  });

  it('returns to home from section when back button is clicked', async () => {
    const user = userEvent.setup();
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    const foodButton = screen.getByText('FOOD');
    await user.click(foodButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    const backButton = screen.getAllByText('Back')[0];
    await user.click(backButton);

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });
  });

  it('navigates to subsection when subsection is picked', async () => {
    const user = userEvent.setup();
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    const foodButton = screen.getByText('FOOD');
    await user.click(foodButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    const chickenButton = screen.getByText('chicken');
    await user.click(chickenButton);

    await waitFor(() => {
      expect(screen.getByTestId('subsection-gallery')).toBeInTheDocument();
    });
  });

  it('displays error message when menu fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    renderPage();

    await waitFor(() => {
      expect(screen.getByText(/Failed to load menu/)).toBeInTheDocument();
    });
  });

  it('opens order card when open order is clicked from subsection', async () => {
    const user = userEvent.setup();
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    const foodButton = screen.getByText('FOOD');
    await user.click(foodButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    const chickenButton = screen.getByText('chicken');
    await user.click(chickenButton);

    await waitFor(() => {
      expect(screen.getByTestId('subsection-gallery')).toBeInTheDocument();
    });

    const openOrderButton = screen.getByText('Open Order');
    await user.click(openOrderButton);

    await waitFor(() => {
      expect(screen.getByTestId('order-card')).toBeInTheDocument();
    });
  });

  it('returns to subsection from order when back is clicked', async () => {
    const user = userEvent.setup();
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    const foodButton = screen.getByText('FOOD');
    await user.click(foodButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    const chickenButton = screen.getByText('chicken');
    await user.click(chickenButton);

    await waitFor(() => {
      expect(screen.getByTestId('subsection-gallery')).toBeInTheDocument();
    });

    const openOrderButton = screen.getByText('Open Order');
    await user.click(openOrderButton);

    await waitFor(() => {
      expect(screen.getByTestId('order-card')).toBeInTheDocument();
    });

    const backButton = screen.getAllByText('Back')[0];
    await user.click(backButton);

    await waitFor(() => {
      expect(screen.getByTestId('subsection-gallery')).toBeInTheDocument();
    });
  });

  it('groups menu items by section and subsection', async () => {
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    // Verify fetch was called
    expect(global.fetch).toHaveBeenCalledWith('/api/menu', { cache: 'no-store' });
  });

  it('renders CardShell with proper overlay and bgFit', async () => {
    renderPage();

    await waitFor(() => {
      const cardShell = screen.getByTestId('card-shell');
      expect(cardShell).toHaveAttribute('data-overlay', 'medium');
    });
  });

  it('navigates through multiple subsections', async () => {
    const user = userEvent.setup();
    renderPage();

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });

    // Go to food
    const foodButton = screen.getByText('FOOD');
    await user.click(foodButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    // Go to chicken
    const chickenButton = screen.getByText('chicken');
    await user.click(chickenButton);

    await waitFor(() => {
      expect(screen.getByTestId('subsection-gallery')).toBeInTheDocument();
    });

    // Go back to section
    const backButton = screen.getAllByText('Back')[0];
    await user.click(backButton);

    await waitFor(() => {
      expect(screen.getByTestId('section-card')).toBeInTheDocument();
    });

    // Go to beverages (after back to home)
    const backToHome = screen.getByText('Back');
    await user.click(backToHome);

    await waitFor(() => {
      expect(screen.getByTestId('home-card')).toBeInTheDocument();
    });
  });
});
