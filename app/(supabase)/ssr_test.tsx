
/*
useclient, useState useEffect 등을 사용할 필요가 없다.
*/
export const metadta = {
  title: "SSR Test", 
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
  //return fetch(URL).then(response => response.json());
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function SSRTest() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>
}