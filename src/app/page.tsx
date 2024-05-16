import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {

  const filmes = [
    {
      id: 1,
      title: "Caça fantasmas",
      poster_path: "https://image.tmdb.org/t/p/original/boObGdocQS07Nu7IrettgA5oRTp.jpg",
      vote_average: 6.6
    },
    {
      id: 2,
      title: "Godzilla Minus One",
      poster_path: "https://image.tmdb.org/t/p/original/ldQPAfjdHenGUu69jHoIphYjJhb.jpg",
      vote_average: 9.7
    }
  ]


  return ( 
    <main className="flex min-h-screen flex-col">
      
      <NavBar />
      <Title>Filmes em Alta</Title>
      <section className="flex gap-4 m-4 flex-wrap">
        
        { filmes.map( filme => <Card filme={filme} />) }
 
      </section>

      <section>
        <Title>Séries em Alta</Title>
      </section>



    </main>
  );
}
