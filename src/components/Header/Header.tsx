import Rating from '@mui/material/Rating';
import Iterator from '../Iterator/Iterator';

type Props = {
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
};

const Header = ({ ratingObject, adultsObject, childrenObject }: Props) => {
  const { rating, setRating } = ratingObject;
  return (
    <div className="w-full h-56 bg-orange-200 mb-12 relative">
      <div className="flex flex-col sm:flex-row h-40 sm:h-fit  justify-between p-4 border-2 border-gray-500 shadow-2xl rounded-2xl absolute left-1/2 -bottom-8 -translate-x-1/2 bg-white">
        <Rating
          onChange={(_, newValue) => setRating(newValue ?? 0)}
          className="mx-2 self-center"
          name="read-only"
          value={rating}
          size="large"
        />
        <Iterator
          label="Adults:"
          value={adultsObject.adults}
          setValue={adultsObject.setAdults}
        />
        <Iterator
          label="Children:"
          value={childrenObject.children}
          setValue={childrenObject.setChildren}
        />
      </div>
    </div>
  );
};
export default Header;
