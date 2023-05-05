import { useQuery } from "@tanstack/react-query";
import { getPokemom } from "../dao/PokemonDao";

export function usePokemon() {
  return useQuery(["pokemons"], () => getPokemom());
}
