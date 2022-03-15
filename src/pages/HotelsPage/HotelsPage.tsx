/* eslint-disable react/jsx-no-useless-fragment */
import Hotel from '../../components/Hotel/Hotel';
import useGetHotels from '../../services/GetHotels/GetHotels.service';

const HotelsPage = () => {
  const { hotelsData, error, isFetching } = useGetHotels();
  if (error) return null;
  if (isFetching) return <h1>Fetching hotels...</h1>;

  return (
    <>
      {hotelsData?.map((hotelData) => (
        <Hotel key={hotelData.id} hotel={hotelData} />
      ))}
    </>
  );
};

export default HotelsPage;
