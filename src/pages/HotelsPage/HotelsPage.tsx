import useGetHotels from '../../services/GetHotels/GetHotels.service';

const HotelsPage = () => {
  const { hotelsData, error, isFetching } = useGetHotels();

  if (error) return null;
  if (isFetching) return <h1>Fetching hotels...</h1>;
  return (
    <h1 className="text-3xl font-bold underline">
      {JSON.stringify(hotelsData?.[0])}
    </h1>
  );
};

export default HotelsPage;
