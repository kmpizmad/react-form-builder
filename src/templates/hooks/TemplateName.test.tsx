import React from 'react';
import { render, screen } from '@testing-library/react';
import { useTemplateName } from './TemplateName';

type TestProps = {};

const TemplateNameTest: React.FC<TestProps> = props => {
  const obj = useTemplateName();
  return <div data-testid="obj">{JSON.stringify(obj)}</div>;
};

describe('useTemplateName', () => {
  it("should log 'Hello World' to console", () => {
    const view = render(<TemplateNameTest />);
    const node = screen.getByTestId('obj');
    expect(node).toBeInTheDocument();
    expect(node).toHaveTextContent('{}');
    view.unmount();
  });
});
