import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home() {
  return (
    <div>
      <head>
        <title>Hulu 2.0</title>
      </head>
      {/* header */}
      <Header/>
      {/* nav */}
      <Nav/>
      {/* Results */}
      <Results/>

    </div>
    
      
     )
}
export async function getServerSideProps(){
  const genre = conext.query.genre;


}