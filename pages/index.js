import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests';

export default function Home({results}) {
  console.log(typeof results)
  console.log(results[0])

  return (
    <div>
      <head>
        <title>Hulu 2.0</title>
      </head>
      {/* header */}
      <Header />
      {/* nav */}
      <Nav />
      {/* Results */}
      <Results results = {results} />

    </div>


  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(
    res => res.json()
  );
  return {
    props:{
      results: request.results,

    }
  }


}