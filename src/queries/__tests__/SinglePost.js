import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

import SinglePost from '../SinglePost';

describe('SinglePost', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div');

    ReactDOM.render(<SinglePost />, root);
    ReactDOM.unmountComponentAtNode(root);
  });

  it('renders the given props', () => {
    const props = {
      id: '1',
      createdAt: '2020-04-19T00:59:59.530Z',
      name: 'Wellington Breitenberg',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg',
      content:
        'If we hack the panel, we can get to the SAS interface through the 1080p TCP firewall!',
    };

    render(<SinglePost {...props} />);

    const post = screen.getByRole('article');
    // console.log(post.textContent);

    expect(post.querySelector(`#post-name-${props.id}`)).toHaveTextContent(
      props.name
    );

    expect(post.querySelector(`#post-datetime-${props.id}`)).toHaveTextContent(
      new Date(props.createdAt).toDateString()
    );

    expect(post.querySelector(`#post-content-${props.id}`)).toHaveTextContent(
      props.content
    );

    expect(post.querySelector('img')).toHaveAttribute('src', props.avatar);
  });
});
