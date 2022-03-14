import { GetHotelsApiResponse, HotelsDTO } from './GetHotels.types';

const mapApiResponseToDTO = (response: GetHotelsApiResponse): HotelsDTO => {
  const { address1, address2, description, id, starRating, name, images } =
    response;

  return { address1, address2, description, id, starRating, name, images };
};

export default mapApiResponseToDTO;
