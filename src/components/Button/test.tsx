import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { Button } from '.';

describe('Button Component', () => {
  it('renders without errors', () => {
    render(<Button label="Test Button" onClick={() => {}} />);
  });

  it('renders the correct label', () => {
    const { getByText } = render(<Button label="Test Button" onClick={() => {}} />);
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('handles click event when not disabled', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button label="Clickable Button" onClick={onClickMock} disabled={false} />
    );
    const buttonElement = getByText('Clickable Button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('does not handle click event when disabled', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button label="Disabled Button" onClick={onClickMock} disabled={true} />
    );
    const buttonElement = getByText('Disabled Button');
    fireEvent.click(buttonElement);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
