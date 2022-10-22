import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './Form.stories';

describe('Form', () => {
  it('should mount', () => {
    const view = render(<Form />);
    const node = screen.getByTestId('Form');
    expect(node).toBeInTheDocument();
    expect(node).toHaveTextContent('Form works!');
    view.unmount();
  });
});
