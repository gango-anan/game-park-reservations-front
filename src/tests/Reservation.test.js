import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Reservation from '../reservations/components/Reservation';

const data = {
  id: '1',
  title: 'activity',
  park: 'national park',
  imageUrl: 'image-url',
  date: '2021-10-10',
};

beforeEach(() => {
  render(
    <BrowserRouter>
      <Reservation
        id={data.id}
        title={data.title}
        park={data.park}
        imageUrl={data.imageUrl}
        date={data.date}
      />
    </BrowserRouter>
  );
});

afterEach(() => {
  cleanup();
});

test('should render ActivityItem component', () => {
  const reservationElement = screen.getByTestId('reservation-test');
  expect(reservationElement).toBeInTheDocument();
  expect(reservationElement).toHaveTextContent('national park');
});

test('matches snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Reservation
          id={data.id}
          title={data.title}
          park={data.park}
          imageUrl={data.imageUrl}
          date={data.date}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
