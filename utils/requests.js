const API_KEY = process.env.API_KEY;
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
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
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

