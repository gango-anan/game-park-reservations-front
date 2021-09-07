import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ActivityItem from '../activities/components/ActivityItem';

const data = {
  id: 1,
  title: 'activity',
  park: 'national park',
  imageUrl: 'image-url',
  details: 'mountain gorillas',
  hasDetails: true,
  authToken: '101-auth-token',
};

const data2 = {
  id: 2,
  title: 'activity',
  park: 'national park',
  imageUrl: 'image-url',
  details: 'mountain gorillas',
  hasDetails: false,
  authToken: '101-auth-token',
};

beforeEach(() => {
  render(
    <BrowserRouter>
      <ActivityItem
        id={data.id}
        title={data.title}
        park={data.park}
        imageUrl={data.imageUrl}
        details={data.details}
        hasDetails={data.hasDetails}
        authToken={data.authToken}
      />
    </BrowserRouter>
  );
});

afterEach(() => {
  cleanup();
});

test('should render ActivityItem component', () => {
  const activityElement = screen.getByTestId('activity-test');
  expect(activityElement).toBeInTheDocument();
  expect(activityElement).toHaveTextContent('Make reservation');
});

test('matches snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ActivityItem
          id={data2.id}
          title={data2.title}
          park={data2.park}
          imageUrl={data2.imageUrl}
          details={data2.details}
          hasDetails={data2.hasDetails}
          authToken={data2.authToken}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
