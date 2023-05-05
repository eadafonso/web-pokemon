import { usePokemon } from "../../hooks/fetchPokemon";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";
import PokemonList from "./components/PokemonList";

export default function Home() {
  const { data, error, isLoading } = usePokemon();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-6 pb-6">
      <div className="w-[50%]">
        <h1 className="text-3xl font-bold mb-3 text-center text-white">
          Pokemon
        </h1>

        <p className="text-center font-normal text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad in
          veritatis psum dolor sit amet consectetur adipisicing elit. Maiores ad
          in veritatis.
        </p>

        <PokemonList pokemons={data} />
      </div>
    </main>
  );
}
