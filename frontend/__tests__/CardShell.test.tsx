
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardShell from '../components/CardShell';

describe('CardShell', () => {
  it('renders children', () => {
    const { getByText } = render(
      <CardShell>Test Content</CardShell>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
