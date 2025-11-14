import React from 'react';
import { render, screen } from '@testing-library/react';
import CardShell from '@/components/CardShell';
import '@testing-library/jest-dom';

describe('CardShell', () => {
  it('renders children content', () => {
    render(
      <CardShell>
        <div data-testid="child-content">Test Content</div>
      </CardShell>
    );

    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default overlay class (medium)', () => {
    const { container } = render(
      <CardShell>
        <div>Content</div>
      </CardShell>
    );

    const overlay = container.querySelector('[class*="bg-gradient-to-b"]');
    expect(overlay).toBeInTheDocument();
  });

  it('applies light overlay when specified', () => {
    const { container } = render(
      <CardShell overlay="light">
        <div>Content</div>
      </CardShell>
    );

    const overlay = container.querySelector('[class*="bg-gradient-to-b"]');
    expect(overlay).toBeInTheDocument();
  });

  it('applies dark overlay when specified', () => {
    const { container } = render(
      <CardShell overlay="dark">
        <div>Content</div>
      </CardShell>
    );

    const overlay = container.querySelector('[class*="bg-gradient-to-b"]');
    expect(overlay).toBeInTheDocument();
  });

  it('applies no overlay when specified', () => {
    const { container } = render(
      <CardShell overlay="none">
        <div>Content</div>
      </CardShell>
    );

    // When overlay is 'none', there should be no overlay div with gradient
    const overlay = container.querySelector('[class*="from-black"]');
    expect(overlay).not.toBeInTheDocument();
  });

  it('sets background image when provided', () => {
    const testImage = '/test/image.jpg';
    const { container } = render(
      <CardShell bgImage={testImage}>
        <div>Content</div>
      </CardShell>
    );

    const shellDiv = container.querySelector('[style*="backgroundImage"]');
    expect(shellDiv).toBeInTheDocument();
    expect(shellDiv).toHaveStyle(`background-image: url(${testImage})`);
  });

  it('applies cover background fit by default', () => {
    const { container } = render(
      <CardShell>
        <div>Content</div>
      </CardShell>
    );

    const mainDiv = container.querySelector('[class*="bg-cover"]');
    expect(mainDiv).toBeInTheDocument();
  });

  it('applies contain background fit when specified', () => {
    const { container } = render(
      <CardShell bgFit="contain">
        <div>Content</div>
      </CardShell>
    );

    const mainDiv = container.querySelector('[class*="bg-contain"]');
    expect(mainDiv).toBeInTheDocument();
  });

  it('renders center content when provided', () => {
    render(
      <CardShell centerContent={<div data-testid="center-content">Centered</div>}>
        <div>Regular Content</div>
      </CardShell>
    );

    expect(screen.getByTestId('center-content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <CardShell className="custom-class">
        <div>Content</div>
      </CardShell>
    );

    const mainDiv = container.querySelector('.custom-class');
    expect(mainDiv).toBeInTheDocument();
  });

  it('applies custom style', () => {
    const { container } = render(
      <CardShell style={{ borderRadius: '8px' }}>
        <div>Content</div>
      </CardShell>
    );

    const mainDiv = container.querySelector('[style*="borderRadius"]');
    expect(mainDiv).toBeInTheDocument();
  });

  it('applies bgClassName for background styling', () => {
    const { container } = render(
      <CardShell bgClassName="bg-red-500">
        <div>Content</div>
      </CardShell>
    );

    const mainDiv = container.querySelector('.bg-red-500');
    expect(mainDiv).toBeInTheDocument();
  });

  it('renders fixed outer container', () => {
    const { container } = render(
      <CardShell>
        <div>Content</div>
      </CardShell>
    );

    const fixedContainer = container.querySelector('.fixed.inset-0');
    expect(fixedContainer).toBeInTheDocument();
  });

  it('renders multiple children correctly', () => {
    render(
      <CardShell>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </CardShell>
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
  });

  it('maintains proper layering with overlay and center content', () => {
    const { container } = render(
      <CardShell
        overlay="medium"
        centerContent={<div data-testid="centered">Centered</div>}
      >
        <div data-testid="main">Main Content</div>
      </CardShell>
    );

    // Both should be present
    expect(screen.getByTestId('centered')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();

    // Overlay should also be present
    const overlay = container.querySelector('[class*="bg-gradient-to-b"]');
    expect(overlay).toBeInTheDocument();
  });

  it('renders with all optional props combined', () => {
    const { container } = render(
      <CardShell
        bgImage="/test.jpg"
        overlay="dark"
        bgFit="contain"
        className="custom-shell"
        style={{ maxWidth: '800px' }}
        bgClassName="bg-blue-500"
        centerContent={<div>Center</div>}
      >
        <div data-testid="main-content">Main</div>
      </CardShell>
    );

    expect(screen.getByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByText('Center')).toBeInTheDocument();
    expect(container.querySelector('.custom-shell')).toBeInTheDocument();
    expect(container.querySelector('.bg-blue-500')).toBeInTheDocument();
  });
});
