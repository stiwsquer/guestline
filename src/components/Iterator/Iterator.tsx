type Props = {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const Iterator = ({ label, value, setValue }: Props) => (
  <div
    data-testid="iterator"
    className="flex h-fit text-center content-center self-center mx-2  text-xl"
  >
    <h3 data-testid="iterator-label" className="self-center ">
      {label}
    </h3>
    <button
      data-testid="iterator-sub-btn"
      className="btn-color mx-2 text-2xl "
      type="button"
      onClick={() => setValue((prev) => (prev > 0 ? prev - 1 : prev))}
    >
      -
    </button>
    <span data-testid="iterator-value" className="self-center w-5">
      {value}
    </span>
    <button
      data-testid="iterator-add-btn"
      className=" btn-color mx-2 text-2xl"
      type="button"
      onClick={() => setValue((prev) => prev + 1)}
    >
      +
    </button>
  </div>
);

export default Iterator;
