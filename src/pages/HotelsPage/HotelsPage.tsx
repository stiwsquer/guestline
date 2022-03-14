import useGetHotels from '../../services/GetHotels/GetHotels.service';
import useGetRooms from '../../services/GetRooms/GetRooms.service';

const HotelsPage = () => {
  const { hotelsData, error, isFetching } = useGetHotels();
  const {
    roomsData,
    error: roomsError,
    isFetching: isFetchingRooms,
  } = useGetRooms('OBMNG1');

  if (error || roomsError) return null;
  if (isFetching || isFetchingRooms) return <h1>Fetching hotels...</h1>;
  return (
    <h1 className="text-3xl font-bold underline">
      {JSON.stringify(hotelsData?.[0])}
      {JSON.stringify(roomsData)}
    </h1>
  );
};

export default HotelsPage;
