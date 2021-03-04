# React-TDD

## Useful functions:

```javascript
expect(...).toBeInTheDocument();

expect(...).toHaveTextContent('...');

render(<... />);

screen.queryBy__('...');
screen.getBy__('...');
screen.findBy__('...');

screen.getByTestId('...'); 

fireEvent.click(...);

await waitFor(() => { ... });
```