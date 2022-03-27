import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Iterator from './Iterator';

describe('Iterator', () => {
  it('Should correctly render', () => {
    const { getByTestId } = render(
      <Iterator label="test" value={0} setValue={() => {}} />,
    );

    expect(getByTestId('iterator-label')).toBeInTheDocument();
    expect(getByTestId('iterator-sub-btn')).toBeInTheDocument();
    expect(getByTestId('iterator-add-btn')).toBeInTheDocument();
    expect(getByTestId('iterator-value')).toBeInTheDocument();
  });

  it('Should render props', () => {
    const label = 'test';
    const value = 0;

    const { getByText } = render(
      <Iterator label={label} value={value} setValue={() => {}} />,
    );

    expect(getByText(label)).toBeInTheDocument();
    expect(getByText(value)).toBeInTheDocument();
  });

  it('Should correctly call setValue function when the button was clicked', () => {
    const setValue = jest.fn();

    const { getByTestId } = render(
      <Iterator label="test" value={0} setValue={setValue} />,
    );
    getByTestId('iterator-add-btn').click();
    expect(setValue).toHaveBeenCalledTimes(1);
    getByTestId('iterator-sub-btn').click();
    expect(setValue).toHaveBeenCalledTimes(2);
  });

  it('Should not call setValue when the button was not clicked', () => {
    const setValue = jest.fn();

    render(<Iterator label="test" value={0} setValue={setValue} />);

    expect(setValue).not.toHaveBeenCalled();
  });
});
