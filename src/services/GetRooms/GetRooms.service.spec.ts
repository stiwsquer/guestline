import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import TestWrapper from '../../helpers/TestWrapper';
import { useGetRooms } from './GetRooms.service';
import mockRoomsApiResponse from './GetRooms.mock';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('GetRooms.service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should fetch rooms when hotel id was provided', async () => {
    (axios.get as jest.Mock).mockImplementation(() => ({
      status: 200,
      data: mockRoomsApiResponse,
    }));

    const { result, waitForNextUpdate } = renderHook(() => useGetRooms('ID'), {
      wrapper: TestWrapper,
    });

    expect(result.current.isFetching).toBeTruthy();
    expect(result.current.roomsData).toStrictEqual(null);

    await waitForNextUpdate();

    expect(result.current.isFetching).toBeFalsy();
    expect(result.current.roomsData).toStrictEqual(mockRoomsApiResponse);
  });

  it('should not fetch rooms when hotel id was not provided', async () => {
    const { result } = renderHook(() => useGetRooms(''), {
      wrapper: TestWrapper,
    });
    expect(result.current.isFetching).toBeFalsy();
    expect(result.current.roomsData).toStrictEqual(null);
  });
});
