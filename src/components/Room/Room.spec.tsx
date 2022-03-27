import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Room from './Room';
import mockRoomsApiResponse from '../../services/GetRooms/GetRooms.mock';

describe('Room', () => {
  it('Should correctly render', () => {
    const { getByTestId } = render(
      <Room room={mockRoomsApiResponse.rooms[0]} />,
    );

    expect(getByTestId('room-name')).toBeInTheDocument();
    expect(getByTestId('room-adults')).toBeInTheDocument();
    expect(getByTestId('room-adults-quantity')).toBeInTheDocument();
    expect(getByTestId('room-children')).toBeInTheDocument();
    expect(getByTestId('room-children-quantity')).toBeInTheDocument();
    expect(getByTestId('room-description')).toBeInTheDocument();
  });

  it('Should render props', () => {
    const {
      name,
      occupancy: { maxAdults, maxChildren },
      longDescription,
    } = mockRoomsApiResponse.rooms[0];

    const { getByText } = render(<Room room={mockRoomsApiResponse.rooms[0]} />);

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(maxAdults)).toBeInTheDocument();
    expect(getByText(maxChildren)).toBeInTheDocument();
    expect(getByText(longDescription)).toBeInTheDocument();
  });
});
