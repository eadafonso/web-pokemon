import { PokemonImage } from "../../../utils/pokemonImage";
import { Pokemon } from "./Pokemon";

export type PokemonType = {
  name: string;
};

type Props = {
  pokemons: PokemonType[] | undefined;
};

export default function PokemonList({ pokemons }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 max-w-md m-auto">
      {pokemons?.map((pokemon: PokemonType, index: number) => {
        return (
          <Pokemon
            key={index}
            id={index + 1}
            image={`${PokemonImage}${index + 1}.png`}
            name={pokemon.name}
          />
        );
      })}
    </div>
  );
}
