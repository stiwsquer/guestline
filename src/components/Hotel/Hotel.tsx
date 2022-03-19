import Rating from '@mui/material/Rating';
import { HotelDTO } from '../../services/GetHotels/GetHotels.types';
import useGetRooms from '../../services/GetRooms/GetRooms.service';
import Slider from '../Slider/Slider';
import Room from '../Room/Room';

type Props = {
  hotel: HotelDTO;
};
const Hotel = ({ hotel }: Props) => {
  const { roomsData, isFetching, error } = useGetRooms(hotel.id);

  if (error) return null;
  if (isFetching) return <h1>Fetching room...</h1>;

  return (
    <article className="w-full my-6 mx-2  flex flex-col shadow-2xl">
      <section className="flex flex-row w-full flex-wrap-reverse justify-center">
        <Slider images={hotel.images} />
        <div className="flex flex-row justify-between flex-1 basis-80 ">
          <div className="m-4">
            <h1 className="font-bold text-xl mb-3">{hotel.name}</h1>
            <h3 className=" text-sm mb-1">{hotel.address1}</h3>
            <h3 className=" text-sm">{hotel.address2}</h3>
          </div>
          <Rating
            className="m-4"
            name="read-only"
            value={+hotel.starRating}
            readOnly
          />
        </div>
      </section>
      {roomsData?.rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </article>
  );
};

export default Hotel;
