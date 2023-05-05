import { PokemonType } from "../pages/Home/components/PokemonList";

export async function getPokemom() {
  const myArray: PokemonType[] = [];

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=11");
  const { results } = await response.json();

  for (const item of results) {
    myArray.push({ name: item.name });
  }

  return myArray;
}
