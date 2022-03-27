import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Image } from '../../services/GetHotels/GetHotels.types';

interface Props {
  images: Image[];
}

const Slider = ({ images }: Props) => {
  const [page, setPage] = useState(0);

  const imageIndex = wrap(0, images.length, page);
  const image = images[imageIndex];

  const paginate = (newDirection: 1 | -1) =>
    setPage((prev) => prev + newDirection);

  return (
    <div className="relative overflow-hidden m-4 self-center">
      <AnimatePresence initial={false}>
        <motion.img
          data-testid="slider-img"
          className="md:h-56 md:w-72 max-h-80 rounded-lg object-cover shadow-2xl cursor-pointer"
          key={page}
          src={image.url}
          alt={image.alt ?? 'Hotel image'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) paginate(-1);
            if (info.offset.x > 100) paginate(1);
          }}
          dragElastic={1}
        />
      </AnimatePresence>
      <motion.button
        data-testid="slider-bth-next"
        className="right-2 top-1/2 -translate-y-1/2 slider-nav-btn btn-color"
        onClick={() => paginate(1)}
      >
        <FontAwesomeIcon
          data-testid="slider-icon-next"
          icon={faAngleRight}
          size="2x"
        />
      </motion.button>

      <motion.button
        data-testid="slider-bth-prev"
        className=" left-2 top-1/2 -translate-y-1/2 slider-nav-btn btn-color"
        onClick={() => paginate(-1)}
      >
        <FontAwesomeIcon
          data-testid="slider-icon-prev"
          icon={faAngleLeft}
          size="2x"
        />
      </motion.button>
    </div>
  );
};

export default Slider;
