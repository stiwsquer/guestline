import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Collapse from '@mui/material/Collapse';
import { HotelDTO } from '../../services/GetHotels/GetHotels.types';
import useGetRooms from '../../services/GetRooms/GetRooms.service';
import Slider from '../Slider/Slider';
import Room from '../Room/Room';

type Props = {
  hotel: HotelDTO;
};
const Hotel = ({ hotel }: Props) => {
  const { roomsData, isFetching, error } = useGetRooms(hotel.id);
  const [expand, setExpand] = useState(true);

  if (error) return null;
  if (isFetching) return <h1>Fetching rooms...</h1>;

  return (
    <article className="w-full my-6 flex flex-col shadow-2xl rounded-lg">
      <section className="flex flex-row w-full flex-wrap-reverse justify-center relative sm:pb-0 pb-5">
        <Slider images={hotel.images} />
        <div className="flex flex-row justify-between flex-1 basis-80 ">
          <div className="m-4">
            <h1 className="font-bold text-xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {hotel.name}
            </h1>
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
        <button
          className="absolute bottom-0 right-4 text-violet-500"
          type="button"
          onClick={() => setExpand((prev) => !prev)}
        >
          <FontAwesomeIcon
            className={
              expand
                ? 'rotate-180 transition-transform'
                : 'transition-transform'
            }
            icon={faAngleDown}
            size="2x"
          />
        </button>
      </section>

      <Collapse in={expand} timeout="auto" unmountOnExit>
        {roomsData?.rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </Collapse>
    </article>
  );
};

export default Hotel;
