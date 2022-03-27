import { RoomInterface } from '../../services/GetRooms/GetRooms.types';

type Props = {
  room: RoomInterface;
};

function Room({ room }: Props) {
  return (
    <section className="m-4 flex border-t border-slate-400 pt-4 ">
      <div className="basis-60">
        <h2 data-testid="room-name" className="font-bold text-md mb-2">
          {room.name}
        </h2>
        <div className="flex">
          <h4 data-testid="room-adults" className="mr-1">
            Adults:
          </h4>
          <div data-testid="room-adults-quantity">
            {room.occupancy.maxAdults}
          </div>
        </div>
        <div className="flex">
          <h4 data-testid="room-children" className="mr-1">
            Children:
          </h4>
          <div data-testid="room-children-quantity">
            {room.occupancy.maxChildren}
          </div>
        </div>
      </div>
      <div data-testid="room-description" className="basis-60 flex-1 text-sm ">
        {room.longDescription}
      </div>
    </section>
  );
}

export default Room;
