import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Counter from '../Counter';

beforeEach(() => {
  render(<Counter />);
});

describe('Counter', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter />, div);
  });

  it('should say "counter" in the header', () => {
    expect(screen.getByTestId('heading')).toHaveTextContent(/^Counter$/);
  });

  it('should have an increment button', () => {
    const incBtn = screen.getByText('+');
    expect(incBtn).toHaveAttribute('type', 'button');
    expect(incBtn).toBeEnabled();
  });

  it('should have an decrement button', () => {
    const decBtn = screen.getByText('-');
    expect(decBtn).toHaveAttribute('type', 'button');
    expect(decBtn).toBeEnabled();
  });

  it('should start counting from ZERO', () => {
    const total = screen.getByTestId('total');
    expect(total.textContent).toEqual('0');
  });

  it('should increment the total by 1 when the increment button is pressed once', async () => {
    const total = screen.getByTestId('total');
    const incBtn = screen.getByText('+');

    fireEvent.click(incBtn);

    await waitFor(() => {
      expect(total.textContent).toEqual('1');
    });
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  test('should increment the total by the number of arbitrary clicks on incBtn', async () => {
    const total = screen.getByTestId('total');
    const incBtn = screen.getByText('+');

    const n = getRandomInt(10);
    for (let i = 0; i < n; i += 1) fireEvent.click(incBtn);

    // expect(total.textContent).toEqual(`${n}`);  // Doesn't work if it takes some time

    await waitFor(() => {
      expect(total.textContent).toEqual(`${n}`);
    });
  });

  test('should decrease the total by 1 when decrement button is pressed once', async () => {
    const total = screen.getByTestId('total');
    const decBtn = screen.getByText('-');

    fireEvent.click(decBtn);

    await waitFor(() => {
      expect(total.textContent).toEqual('-1');
    });
  });

  test('should decrement the total by the number of arbitrary clicks on decBtn', async () => {
    const total = screen.getByTestId('total');
    const decBtn = screen.getByText('-');

    const n = getRandomInt(10);
    for (let i = 0; i < n; i += 1) fireEvent.click(decBtn);

    await waitFor(() => {
      expect(total.textContent).toEqual(`${-n}`);
    });
  });
});
