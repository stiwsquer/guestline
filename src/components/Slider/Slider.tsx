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

  const paginate = (newDirection: 1 | -1) =>
    setPage((prev) => prev + newDirection);

  return (
    <div className="relative overflow-hidden m-4">
      <AnimatePresence initial={false}>
        <motion.img
          className="sm:h-56 sm:w-72 max-h-80 rounded-lg object-cover shadow-2xl cursor-pointer"
          key={page}
          src={images[imageIndex].url}
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
        className="right-1 top-1/2 -translate-y-1/2 slider-nav-btn"
        onClick={() => paginate(1)}
      >
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </motion.button>

      <motion.button
        className=" left-1 top-1/2 -translate-y-1/2 slider-nav-btn"
        onClick={() => paginate(-1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </motion.button>
    </div>
  );
};

export default Slider;
