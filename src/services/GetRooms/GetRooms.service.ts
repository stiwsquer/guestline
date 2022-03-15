import axios from 'axios';
import { useQuery } from 'react-query';
import { GetRoomsApiResponse } from './GetRooms.types';

const GET_ROOMS_QUERY = 'getRooms';
const GET_ROOMS_URL = process.env.REACT_APP_GUESTLINE_ROOMS_API_URL;

const queryRooms = async (roomId: string) => {
  if (!GET_ROOMS_URL || !roomId) return null;
  const res = await axios.get<GetRoomsApiResponse>(
    `${GET_ROOMS_URL}/${roomId}`,
  );
  return res.data;
};

const useGetRooms = (roomId: string) => {
  const { data, isFetching, error } = useQuery(
    [GET_ROOMS_QUERY, roomId],
    () => queryRooms(roomId),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !!roomId,
    },
  );

  return {
    roomsData: data,
    isFetching,
    error,
  };
};

export default useGetRooms;
