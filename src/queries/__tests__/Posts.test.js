import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { fetchPosts } from '../../data/posts';
import Posts from '../Posts';

jest.mock('../../data/posts');

const fakeData = [
  {
    id: '1',
    createdAt: '2020-04-19T00:59:59.530Z',
    name: 'Wellington Breitenberg',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg',
    content:
      'If we hack the panel, we can get to the SAS interface through the 1080p TCP firewall!',
  },
  {
    id: '2',
    createdAt: '2020-06-03T20:00:01.671Z',
    name: 'Emely Wilderman',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/smaczny/128.jpg',
    content:
      'If we input the circuit, we can get to the IB system through the primary HDD sensor!',
  },
  {
    id: '3',
    createdAt: '2020-07-15T04:37:02.225Z',
    name: 'Kelly Maggio',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/jimmuirhead/128.jpg',
    content:
      'If we back up the port, we can get to the EXE circuit through the neural PCI bus!',
  },
];

//! Not working...
// jest.mock('../../data/posts', () => ({
//   __esModule: true,
//   fetchPosts: jest.fn(() => Promise.resolve(fakeData)),
// }));

describe('Posts', () => {
  test('it renders without crashing', () => {
    const root = document.createElement('main');
    ReactDOM.render(<Posts />, root);
    ReactDOM.unmountComponentAtNode(root);
  });
  // console.log(fetchPosts);

  describe('When load button is pressed', () => {
    let loadBtn;

    beforeEach(() => {
      render(<Posts />);
      loadBtn = screen.getByTestId('loadBtn');
      fetchPosts.mockResolvedValue(fakeData);
    });

    it('fetches the posts from API', () => {
      fireEvent.click(loadBtn);
      expect(fetchPosts).toHaveBeenCalled();
    });

    it('renders the posts on screen', async () => {
      fireEvent.click(loadBtn);

      await waitFor(() => {
        screen.getByRole('feed');
        screen.getAllByRole('article');
        expect(screen.getByRole('feed')).toBeInTheDocument();
        expect(screen.getAllByRole('article')).toHaveLength(fakeData.length);
      });
    });
  });
});
