import React from 'react';
// import { Link } from 'react-router-dom';
import './MoviesCard.css';
const MoviesCard = (props) => {
    const {url , name ,language ,runtime,genres,image,rating,schedule,summary ,time}= props ;
  
  return (
    <>
      <div className="card" >
        <div className="card-body">
          <img src={image} className="card-img-top" alt={name}/>
          
          <div dangerouslySetInnerHTML={{__html:summary}} className="summary"></div>
        </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a href={url} className="book">book movie tickets</a>
        <div className='p'>
            <div >{language}</div> <br/> <div >WatchTime : -{runtime}</div>
        </div> <br/>
        <div className='p'><div>{genres}</div><div>ratings {rating}</div></div>
        
        <div className='p'><span>on {schedule}</span> <span>{time}</span></div>
        </div>
      </div>

    </>
  )
}

export default MoviesCard

