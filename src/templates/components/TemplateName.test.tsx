import React from 'react';
import { render, screen } from '@testing-library/react';
import { TemplateName } from './TemplateName.stories';

describe('TemplateName', () => {
  it('should mount', () => {
    const view = render(<TemplateName />);
    const node = screen.getByTestId('TemplateName');
    expect(node).toBeInTheDocument();
    expect(node).toHaveTextContent('TemplateName works!');
    view.unmount();
  });
});
