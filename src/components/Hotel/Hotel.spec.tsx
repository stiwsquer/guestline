import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mockHotelsDTO } from '../../services/GetHotels/GetHotels.mock';
import mockRoomsApiResponse from '../../services/GetRooms/GetRooms.mock';
import { useGetRooms } from '../../services/GetRooms/GetRooms.service';
import Hotel from './Hotel';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/GetRooms/GetRooms.service', () => ({
  useGetRooms: jest.fn(),
}));

describe('Hotel', () => {
  it('Should correctly render', () => {
    (useGetRooms as jest.Mock).mockImplementation(() => ({
      roomsData: mockRoomsApiResponse,
      isFetching: false,
      error: false,
    }));

    const { getByTestId } = render(
      <Hotel
        hotel={mockHotelsDTO[0]}
        adultsQuantity={0}
        childrenQuantity={0}
      />,
    );

    expect(getByTestId('hotel')).toBeInTheDocument();
  });

  it('Should return null when there was an error while fetching', () => {
    (useGetRooms as jest.Mock).mockImplementation(() => ({
      roomsData: null,
      isFetching: false,
      error: true,
    }));

    const hotel = shallow(
      <Hotel
        hotel={mockHotelsDTO[0]}
        adultsQuantity={0}
        childrenQuantity={0}
      />,
    );
    expect(hotel.isEmptyRender()).toEqual(true);
  });

  it('Should return fetching rooms text when fetching', () => {
    (useGetRooms as jest.Mock).mockImplementation(() => ({
      roomsData: null,
      isFetching: true,
      error: false,
    }));

    const { getByTestId, queryByTestId } = render(
      <Hotel
        hotel={mockHotelsDTO[0]}
        adultsQuantity={0}
        childrenQuantity={0}
      />,
    );
    expect(getByTestId('fetching-rooms-text')).toBeInTheDocument();
    expect(queryByTestId('hotel')).not.toBeInTheDocument();
  });

  it('Should condense rooms when expand button was clicked', () => {
    (useGetRooms as jest.Mock).mockImplementation(() => ({
      roomsData: mockRoomsApiResponse,
      isFetching: false,
      error: false,
    }));

    const { getByTestId } = render(
      <Hotel
        hotel={mockHotelsDTO[0]}
        adultsQuantity={0}
        childrenQuantity={0}
      />,
    );

    const expandBtn = getByTestId('expand-rooms-btn');
    expect(getByTestId('expand-rooms-icon')).toHaveClass('rotate-180');
    expandBtn.click();
    expect(getByTestId('expand-rooms-icon')).not.toHaveClass('rotate-180');
  });
});
