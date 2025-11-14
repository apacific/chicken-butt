import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SectionCard from '@/components/cards/SectionCard';
import type { SectionKey } from '@/types/Menu';
import '@testing-library/jest-dom';

// Mock dependencies
jest.mock('@/components/ui/LogoBlock', () => {
  return function MockLogoBlock() {
    return <div data-testid="logo-block">Logo Block</div>;
  };
});

jest.mock('@/components/ui/NavPanel', () => {
  return function MockNavPanel({ items }: { items: Array<{ label: string; onClick: () => void }> }) {
    return (
      <div data-testid="nav-panel">
        {items.map((item) => (
          <button key={item.label} onClick={item.onClick}>
            {item.label}
          </button>
        ))}
      </div>
    );
  };
});

describe('SectionCard', () => {
  const mockOnBack = jest.fn();
  const mockOnPick = jest.fn();
  const subsections = ['chicken', 'sides', 'desserts'];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the section title', () => {
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={subsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    expect(screen.getByText('FOOD')).toBeInTheDocument();
  });

  it('renders back button', () => {
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={subsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    const backButton = screen.getByLabelText('Back');
    expect(backButton).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', async () => {
    const user = userEvent.setup();
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={subsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    const backButton = screen.getByLabelText('Back');
    await user.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('renders subsections in nav panel', () => {
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={subsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    subsections.forEach((sub) => {
      expect(screen.getByText(sub)).toBeInTheDocument();
    });
  });

  it('calls onPick with correct subsection when clicked', async () => {
    const user = userEvent.setup();
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={subsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    const chickenButton = screen.getByText('chicken');
    await user.click(chickenButton);

    expect(mockOnPick).toHaveBeenCalledWith('chicken');
  });

  it('calls onPick with correct subsection for each subsection button', async () => {
    const user = userEvent.setup();
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={subsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    for (const sub of subsections) {
      mockOnPick.mockClear();
      const button = screen.getByText(sub);
      await user.click(button);
      expect(mockOnPick).toHaveBeenCalledWith(sub);
    }
  });

  it('renders beverages section correctly', () => {
    const section: SectionKey = 'beverages';
    const beverageSubsections = ['soft drinks', 'iced tea'];

    render(
      <SectionCard
        section={section}
        subsections={beverageSubsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    expect(screen.getByText('BEVERAGES')).toBeInTheDocument();
    beverageSubsections.forEach((sub) => {
      expect(screen.getByText(sub)).toBeInTheDocument();
    });
  });

  it('renders logo block', () => {
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={subsections}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    expect(screen.getByTestId('logo-block')).toBeInTheDocument();
  });

  it('handles empty subsections list', () => {
    const section: SectionKey = 'food';

    render(
      <SectionCard
        section={section}
        subsections={[]}
        onBack={mockOnBack}
        onPick={mockOnPick}
      />
    );

    expect(screen.getByText('FOOD')).toBeInTheDocument();
    const navPanel = screen.getByTestId('nav-panel');
    expect(navPanel).toBeInTheDocument();
  });
});
