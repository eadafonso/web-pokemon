import { Link } from "react-router-dom";

type Props = {
  name: string;
  image: string;
  id: number;
};

export function Pokemon(props: Props) {
  const { name, image } = props;

  return (
    <Link to="/">
      <div className="bg-red-100 w-[140px] h-40 flex flex-col justify-center items-center">
        <img src={image} alt={image} className="w-20 h-20" />

        <p className="text-center text-zinc-800">{name}</p>
      </div>
    </Link>
  );
}
