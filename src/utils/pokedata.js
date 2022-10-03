import { getPokemon } from "../services/pokeapi-service";

export async function setpoke(){
  return await getPokemon("pikachu")
  .then((data) =>{ 
    let exampleData = data;
    console.log(exampleData);
    return exampleData})
}