import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mockHotelsDTO } from '../../services/GetHotels/GetHotels.mock';
import { useGetHotels } from '../../services/GetHotels/GetHotels.service';
import HotelsPage from './HotelsPage';
import TestWrapper from '../../helpers/TestWrapper';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/GetHotels/GetHotels.service', () => ({
  useGetHotels: jest.fn(),
}));

describe('Hotels page', () => {
  it('Should correctly render', () => {
    (useGetHotels as jest.Mock).mockImplementation(() => ({
      hotelsData: mockHotelsDTO,
      isFetching: false,
      error: false,
    }));

    const { getByTestId } = render(<HotelsPage />, {
      wrapper: TestWrapper,
    });

    expect(getByTestId('hotels-page')).toBeInTheDocument();
  });

  it('Should return null when there was an error while fetching', () => {
    (useGetHotels as jest.Mock).mockImplementation(() => ({
      hotelsData: null,
      isFetching: false,
      error: true,
    }));

    const hotel = mount(<HotelsPage />);
    expect(hotel.isEmptyRender()).toEqual(true);
  });

  it('Should return null when data is equal to null', () => {
    (useGetHotels as jest.Mock).mockImplementation(() => ({
      hotelsData: null,
      isFetching: false,
      error: false,
    }));

    const hotel = mount(<HotelsPage />);
    expect(hotel.isEmptyRender()).toEqual(true);
  });

  it('Should render fetching hotels text when fetching', () => {
    (useGetHotels as jest.Mock).mockImplementation(() => ({
      hotelsData: {},
      isFetching: true,
      error: false,
    }));

    const { getByTestId } = render(<HotelsPage />);
    expect(getByTestId('fetching-hotels-text')).toBeInTheDocument();
  });

  it('Should not render hotels when there is an empty array', () => {
    (useGetHotels as jest.Mock).mockImplementation(() => ({
      hotelsData: [],
      isFetching: false,
      error: false,
    }));

    const { queryByTestId } = render(<HotelsPage />);
    expect(queryByTestId('hotel')).not.toBeInTheDocument();
  });
});
