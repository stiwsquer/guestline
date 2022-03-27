import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { useGetHotels } from './GetHotels.service';
import { mockHotelsApiResponse, mockHotelsDTO } from './GetHotels.mock';
import TestWrapper from '../../helpers/TestWrapper';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('GetHotels.service', () => {
  it('should query hotels and return mapped DTO', async () => {
    (axios.get as jest.Mock).mockImplementation(() => ({
      status: 200,
      data: mockHotelsApiResponse,
    }));

    const { result, waitForNextUpdate } = renderHook(useGetHotels, {
      wrapper: TestWrapper,
    });

    expect(result.current.isFetching).toBeTruthy();
    expect(result.current.hotelsData).toStrictEqual(null);

    await waitForNextUpdate();

    expect(result.current.isFetching).toBeFalsy();
    expect(result.current.hotelsData).toStrictEqual(mockHotelsDTO);
  });
});
