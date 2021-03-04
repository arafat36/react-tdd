import ReactDOM from 'react-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ClickMe from '../ClickMe';

beforeEach(() => {
  render(<ClickMe />);
});

describe('ClickMe', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ClickMe />, div);
  });

  it('contains a button to click', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test('button should say "Click me!"', () => {
    const button = screen.getByRole('button');
    expect(button.textContent).toEqual(expect.stringContaining('Click Me!'));
  });

  test('clicking the button changes the status message', async () => {
    const button = screen.getByRole('button');

    expect(screen.getByTestId('status')).toHaveTextContent(
      /^NOT yet clicked\.\.\.$/
    );

    fireEvent.click(button);
    // button.click(); // TODO: What's the difference? better?

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent(/^CLICKED!!!$/);
    });
  });
});
