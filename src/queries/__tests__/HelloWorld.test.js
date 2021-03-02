import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HelloWorld />, div);
  });

  test('should have "Hello World" somewhere', () => {
    render(<HelloWorld />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
