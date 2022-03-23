/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Hotel from '../../components/Hotel/Hotel';
import useGetHotels from '../../services/GetHotels/GetHotels.service';

const HotelsPage = () => {
  const { hotelsData, error, isFetching } = useGetHotels();
  const [rating, setRating] = useState<number>(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  if (error) return null;
  if (isFetching) return <h1>Fetching hotels...</h1>;

  return (
    <div className="min-h-screen font-poppins">
      <Header
        ratingObject={{ rating, setRating }}
        adultsObject={{ adults, setAdults }}
        childrenObject={{ children, setChildren }}
      />
      <div className="max-w-4xl m-4 md:m-auto">
        {hotelsData?.map((hotelData) =>
          +hotelData.starRating >= rating ? (
            <Hotel
              key={hotelData.id}
              hotel={hotelData}
              adultsQuantity={adults}
              childrenQuantity={children}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};

export default HotelsPage;
