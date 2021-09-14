import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../home/components/Home';
import store from '../store/Store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
});

afterEach(() => {
  cleanup();
});

test('should render Home component', () => {
  const homeElement = screen.getByTestId('home-test');
  expect(homeElement).toBeInTheDocument();
  expect(homeElement).toHaveTextContent('Game Safaris Reservations');
});

test('matches snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
