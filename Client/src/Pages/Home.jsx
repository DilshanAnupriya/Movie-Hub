import React, {useState,useEffect} from 'react'
import Search from "../components/Search.jsx";
import Spinner from "../components/Spinner.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/Motion.js";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_URL;

const API_OPTIONS = {
    method: "GET",
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}


const Home = () => {
    const [search, setSearch] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try{
            const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
            const response = await fetch(endpoint,API_OPTIONS);
            if(!response.ok){
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            if(data.Response === 'False'){
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }
            setMovieList(data.results);
        }catch(error){
            console.error(`error fetching movies : ${error}`);
            setErrorMessage('Something went wrong');
        }finally {
            setIsLoading(false);
        }
    }


    useEffect(()=>{
        fetchMovies()
    },[]);

    return (
        <main>

            <div className='pattern'/>
            <Navbar/>
            <div className='wrapper'>
                <header>
                    <img src='./hero.png' alt='hero' />
                    <motion.div
                        variants={fadeIn("","",0.5,1.5)}
                        initial="hidden"
                        animate="show"
                    >
                        <h1>Find<span className='text-gradient'>&nbsp;Movies</span>
                            You'll Enjoy Without the Hassle</h1>
                    </motion.div>

                    <Search setSearch={setSearch} search={search} />
                </header>
                <section className='all-movies'>
                    <motion.div
                        variants={fadeIn("","",1,2.5)}
                        initial="hidden"
                        animate="show"
                    >
                        <h2 className='mt-[70px]'>All Movies</h2>
                    </motion.div>

                    {isLoading?(
                        <Spinner/>
                    ): errorMessage?(
                        <p className='text-red-500'>{errorMessage}</p>
                    ): (
                        <ul>
                            {movieList.map((movie)=>(
                                <MovieCard key={movie.id} movie={movie}/>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
            <Footer/>
        </main>
    )
}
export default Home
