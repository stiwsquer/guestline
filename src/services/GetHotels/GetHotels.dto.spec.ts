import mapApiResponseToDTO from './GetHotels.dto';
import { mockHotelsApiResponse, mockHotelsDTO } from './GetHotels.mock';

describe('GetHotels.dto', () => {
  it('should map api response to dto', () => {
    expect(
      mockHotelsApiResponse.map((hotel) => mapApiResponseToDTO(hotel)),
    ).toEqual(mockHotelsDTO);
  });
});
