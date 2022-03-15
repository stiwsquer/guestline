import { GetHotelApiResponse, HotelDTO } from './GetHotels.types';

const mapApiResponseToDTO = (response: GetHotelApiResponse): HotelDTO => {
  const { address1, address2, id, starRating, name, images } = response;

  return { address1, address2, id, starRating, name, images };
};

export default mapApiResponseToDTO;
