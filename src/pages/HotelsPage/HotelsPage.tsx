import { useState } from 'react';
import Header from '../../components/Header/Header';
import Hotel from '../../components/Hotel/Hotel';
import { useGetHotels } from '../../services/GetHotels/GetHotels.service';
import { Image } from '../../services/GetHotels/GetHotels.types';

const HotelsPage = () => {
  const { hotelsData, error, isFetching } = useGetHotels();
  const [rating, setRating] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  if (error || !hotelsData) return null;
  if (isFetching)
    return <h1 data-testid="fetching-hotels-text">Fetching hotels...</h1>;

  const hotelsImages = hotelsData.reduce(
    (prev, curr) => [...prev, ...curr.images],
    [] as Image[],
  );

  return (
    <div data-testid="hotels-page" className="min-h-screen font-poppins">
      <Header
        ratingObject={{ rating, setRating }}
        adultsObject={{ adults, setAdults }}
        childrenObject={{ children, setChildren }}
        images={hotelsImages}
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
