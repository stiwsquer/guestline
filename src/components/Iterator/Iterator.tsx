type Props = {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const Iterator = ({ label, value, setValue }: Props) => (
  <div className="flex h-fit text-center content-center self-center mx-2  text-xl">
    <h3 className="self-center ">{label}</h3>
    <button
      className="btn-color mx-2 text-2xl "
      type="button"
      onClick={() => setValue((prev) => (prev > 0 ? prev - 1 : prev))}
    >
      -
    </button>
    <span className="self-center w-5">{value}</span>
    <button
      className=" btn-color mx-2 text-2xl"
      type="button"
      onClick={() => setValue((prev) => prev + 1)}
    >
      +
    </button>
  </div>
);

export default Iterator;
