import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ButtonAction } from '.';

describe('ButtonAction Component', () => {
  it('renders without errors', () => {
    render(<ButtonAction onClick={() => {}}>Test Child</ButtonAction>);
  });

  it('renders children correctly', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(<ButtonAction onClick={onClickMock}>Test Child</ButtonAction>);
    const childElement = getByText('Test Child');
    expect(childElement).toBeInTheDocument();
  });

  it('handles click event when not disabled', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ButtonAction onClick={onClickMock} disabled={false}>Clickable Child</ButtonAction>
    );
    const buttonElement = getByText('Clickable Child');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('does not handle click event when disabled', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ButtonAction onClick={onClickMock} disabled={true}>Disabled Child</ButtonAction>
    );
    const buttonElement = getByText('Disabled Child');
    fireEvent.click(buttonElement);
    expect(onClickMock).not.toHaveBeenCalled();
  });

});
