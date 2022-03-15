import axios from 'axios';
import { useQuery } from 'react-query';
import mapApiResponseToDTO from './GetHotels.dto';
import { GetHotelApiResponse } from './GetHotels.types';

const GET_HOTELS_QUERY = 'getHotels';
const GET_HOTELS_URL = process.env.REACT_APP_GUESTLINE_HOTELS_API_URL;

const queryHotels = async () => {
  if (!GET_HOTELS_URL) return null;
  const res = await axios.get<GetHotelApiResponse[]>(GET_HOTELS_URL);
  return res.data.map((hotel) => mapApiResponseToDTO(hotel));
};

const useGetHotels = () => {
  const { data, isFetching, error } = useQuery(GET_HOTELS_QUERY, queryHotels, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    hotelsData: data,
    isFetching,
    error,
  };
};

export default useGetHotels;
