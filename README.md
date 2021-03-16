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

// For mocking modules 
jest.mock('./module');

/* This will make mock all the functions in the module. Initially, the functions have no implementation, so you have to provide a mocked behavior (fake return value, or promise etc.)
*/

exampleFunction.mockReturnValue(value);
exampleFunction.mockResolvedValue(value);
// ...


```