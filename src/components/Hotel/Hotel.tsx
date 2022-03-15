import { HotelDTO } from '../../services/GetHotels/GetHotels.types';
import useGetRooms from '../../services/GetRooms/GetRooms.service';
import ImageGallery from '../ImageGallery/ImageGallery';
import Room from '../Room/Room';

type Props = {
  hotel: HotelDTO;
};

function Hotel({ hotel }: Props) {
  const { roomsData, isFetching, error } = useGetRooms(hotel.id);

  if (error) return null;
  if (isFetching) return <h1>Fetching room...</h1>;

  return (
    <article>
      <section>
        <div>
          <ImageGallery />
          <div>
            <h1>Hotel 1 Name</h1>
            <h3>Address 1</h3>
            <h3>Address 2</h3>
          </div>
        </div>
        <aside>Rating</aside>
      </section>
      {roomsData?.rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </article>
  );
}

export default Hotel;
