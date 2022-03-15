import { RoomInterface } from '../../services/GetRooms/GetRooms.types';

type Props = {
  room: RoomInterface;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Room({ room }: Props) {
  return <div>Room</div>;
}

export default Room;
