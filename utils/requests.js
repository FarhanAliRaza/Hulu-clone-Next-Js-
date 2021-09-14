const API_KEY = '79e0fd71f37af36d333b58cff8fcf7b8';
//process.env.VARIABLENAME
export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'TopRated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchSciFi: {
        title: 'SciFi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV: {
        title: 'TV',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    //dummy
    fetchBollywood: {
        title: 'Bollywood',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchSutanRahiMovies: {
        title: 'SultanRahi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchShan: {
        title: 'Shan',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchParizaad: {
        title: 'Parizaad',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchRanjhaRanjhaKrdi: {
        title: 'RanjhaRanjhaKrdi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    
    

};
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//   fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//   fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//   fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
// };
