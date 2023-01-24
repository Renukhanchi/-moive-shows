import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = (props) => {
    const {url , name ,language ,runtime,genres,image,rating,schedule,summary ,time}= props ;

    const data = {
      name:name,
      summary:summary,
      url:url,
      image:image,
      rating:rating,
      time:time,
      schedule:schedule,
      runtime:runtime,
    }

    //add dot in last of summary few words
    const str = summary;
    const strchk = str.slice(0, 100);
    const dots = "<b>...show more</b>";
    const join =  strchk.concat(dots); 

    //seprating genere api data with ,
    const genresData =  genres.toString() ;

  return (
    <div>

      <div className="card" >
        <div className="card-img-top">
        {image ?  <img src={image} className="card-img-top" alt={name}/> : "image not avaiable yet "}
        </div>
        <div className="card-body">
          <div className='display_flex'>
            <h5 className="card-title">{name ? name : "no title"}</h5>
            <div >{language ? language : ""}</div> 
          </div>

          <div className='display_flex'>
            <div >{genresData ? genresData : ""}</div>
            <div> {rating ? `ratings ${rating}` : ""}</div>
          </div>

          <div className='display_flex'>
          <div className='p'><span> {schedule ? `${schedule}` : ""}</span> <span>{time ? time : ""}</span></div>
          <div >{runtime ?  `WatchTime (${runtime})` : " "}</div>
          </div>

          <p >
          <Link to="/summary" state={{data:data}} className="card-text" ><abbr title='see summary'  dangerouslySetInnerHTML={{__html:join}}></abbr></Link>
          </p>
          
          <a href={url} className="btn btn1"  rel="noreferrer"  target="_blank">book your show</a>
        </div>
      </div>

    </div>
  )
}

export default MoviesCard

