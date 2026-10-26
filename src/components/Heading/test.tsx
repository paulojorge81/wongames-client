import { screen } from '@testing-library/react';

import { renderWithTheme } from '~/utils/tests/helpers';

import { Heading } from '.';

describe('<Heading />', () => {
  test('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  test('should render a black when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });

  test('should render a heding with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    });
  });

  test('should render a heding with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border',
      '0.4rem solid #F231A5',
      { modifier: '::after' },
    );
  });
});
