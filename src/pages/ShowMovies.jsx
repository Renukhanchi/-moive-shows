import React ,{useState ,useEffect} from 'react';
import MoviesCard from '../components/MoviesCard';
import NavBar from '../components/NavBar';
import axios from 'axios' ;
import './ShowMovies.css'
const ShowMovies = () => {
    const [movieData , setMovieData] = useState([]);
    const [error , setError] = useState("");

    useEffect(()=>{
        axios
            .get("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => {
                setMovieData(res.data)
            })
            .catch((err)=>{
                console.log(err.message);
                setError(err);
            })
    },[])
    
  return (
    <div >
        <NavBar />
        <div>{error}</div>
        <h1 className='page_title'>movies</h1>
        <div className='movies_container'>
        
        {
            movieData.map((data,index)=>{
                const {id ,url , name ,language ,runtime,genres,image,rating,schedule,summary } = data.show ;
                return (
                    <div key={id} >
                        <MoviesCard 
                        image={image?.medium} 
                        url={url} 
                        name={name} 
                        language={language} 
                        runtime={runtime}
                        genres={genres}
                        rating={rating?.average} 
                        schedule={schedule?.days}
                        summary={summary} 
                        time={schedule?.time}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default ShowMovies;
