import Rating from '@mui/material/Rating';
import { Image } from '../../services/GetHotels/GetHotels.types';
import Iterator from '../Iterator/Iterator';

export type Props = {
  ratingObject: {
    rating: number;
    setRating: React.Dispatch<React.SetStateAction<number>>;
  };
  adultsObject: {
    adults: number;
    setAdults: React.Dispatch<React.SetStateAction<number>>;
  };
  childrenObject: {
    children: number;
    setChildren: React.Dispatch<React.SetStateAction<number>>;
  };
  images: Image[];
};

const Header = ({
  ratingObject,
  adultsObject,
  childrenObject,
  images,
}: Props) => {
  const { rating, setRating } = ratingObject;
  const { children, setChildren } = childrenObject;
  const { adults, setAdults } = adultsObject;

  return (
    <div className="w-fit h-56 bg-orange-200 mb-12 relative m-auto">
      <div
        data-testid="header-images"
        className="h-full flex w-full overflow-hidden"
      >
        {images.map((image) => (
          <img
            key={image.url}
            className="h-full"
            src={image.url}
            alt={image.alt ?? 'hotel image'}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row h-40 sm:h-fit  justify-between p-4 border-2 border-gray-500 shadow-2xl rounded-2xl absolute left-1/2 -bottom-8 -translate-x-1/2 bg-white">
        <Rating
          aria-label="hotel rating"
          data-testid="header-rating"
          onChange={(_, newValue) => setRating(newValue ?? 0)}
          className="mx-2 self-center"
          name="read-only"
          value={rating}
          size="large"
        />
        <Iterator label="Adults:" value={adults} setValue={setAdults} max={6} />
        <Iterator
          label="Children:"
          value={children}
          setValue={setChildren}
          max={4}
        />
      </div>
    </div>
  );
};
export default Header;
