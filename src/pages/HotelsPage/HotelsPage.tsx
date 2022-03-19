/* eslint-disable react/jsx-no-useless-fragment */
import Hotel from '../../components/Hotel/Hotel';
import useGetHotels from '../../services/GetHotels/GetHotels.service';

const HotelsPage = () => {
  const { hotelsData, error, isFetching } = useGetHotels();
  if (error) return null;
  if (isFetching) return <h1>Fetching hotels...</h1>;

  return (
    <div className="min-h-screen font-poppins">
      <div className="max-w-4xl  m-auto">
        {hotelsData?.map((hotelData) => (
          <Hotel key={hotelData.id} hotel={hotelData} />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
