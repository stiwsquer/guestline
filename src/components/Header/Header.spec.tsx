/* eslint-disable react/jsx-props-no-spreading */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header, { Props } from './Header';

Enzyme.configure({ adapter: new Adapter() });

const mockProps: Props = {
  ratingObject: {
    rating: 3,
    setRating: jest.fn(),
  },
  adultsObject: {
    adults: 0,
    setAdults: jest.fn(),
  },
  childrenObject: {
    children: 0,
    setChildren: jest.fn(),
  },
  images: [{ url: 'image url 1' }, { url: 'image url 2' }],
};

describe('Header', () => {
  it('Should correctly render', () => {
    const { getByTestId, getAllByTestId } = render(<Header {...mockProps} />);

    expect(getByTestId('header-images')).toBeInTheDocument();
    getAllByTestId('iterator').forEach((iterator) =>
      expect(iterator).toBeInTheDocument(),
    );
    expect(getByTestId('header-rating')).toBeInTheDocument();
  });

  it('Should correctly render images', () => {
    const header = mount(<Header {...mockProps} />);

    header
      .find('img')
      .forEach((img, index) =>
        expect(img.prop('src')).toEqual(mockProps.images[index].url),
      );
  });
});
