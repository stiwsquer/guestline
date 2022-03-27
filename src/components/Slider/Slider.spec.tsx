import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import { mockHotelsApiResponse } from '../../services/GetHotels/GetHotels.mock';
import Slider from './Slider';

Enzyme.configure({ adapter: new Adapter() });

describe('Slider', () => {
  it('Should correctly render', () => {
    const { getByTestId } = render(
      <Slider images={mockHotelsApiResponse[0].images} />,
    );

    expect(getByTestId('slider-img')).toBeInTheDocument();
    expect(getByTestId('slider-bth-next')).toBeInTheDocument();
    expect(getByTestId('slider-bth-prev')).toBeInTheDocument();
    expect(getByTestId('slider-icon-next')).toBeInTheDocument();
    expect(getByTestId('slider-icon-prev')).toBeInTheDocument();
  });

  it('Should correctly render first image', () => {
    const { images } = mockHotelsApiResponse[0];

    const slider = mount(<Slider images={images} />);

    expect(slider.find('img').prop('src')).toEqual(images[0].url);
  });

  it('Should load second image when next button was clicked', () => {
    const { images } = mockHotelsApiResponse[0];

    const slider = mount(<Slider images={images} />);

    expect(slider.find('img').prop('src')).toEqual(images[0].url);
    slider.find('button').at(0).simulate('click');
    expect(slider.find('img').at(1).prop('src')).toEqual(images[1].url);
  });

  it('Should load last image when prev button was clicked', () => {
    const { images } = mockHotelsApiResponse[0];

    const slider = mount(<Slider images={images} />);

    expect(slider.find('img').prop('src')).toEqual(images[0].url);
    slider.find('button').at(1).simulate('click');
    expect(slider.find('img').at(1).prop('src')).toEqual(images[2].url);
  });
});
