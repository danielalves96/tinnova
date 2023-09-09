import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '.';

describe('Layout Component', () => {
  it('renders the Layout component', () => {
    const { container } = render(<Layout>Test Content</Layout>);
    const layoutElement = container.querySelector('.container');
    expect(layoutElement).toBeDefined();
  });
});
