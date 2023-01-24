import React from 'react';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './Summary.css';
const Summary = (props) => {
    const location = useLocation();
    const data = location.state?.data;


  return (
    <div >
      <NavBar/>
      {/* <Link to='/movies' className='btn go_back_button'>go back</Link> */}
      <div className='container container_2'>
        <div className='display_flex both_part'>
          <img src={data.image} alt={data.name} className='image1'/>
          
          <div className='right_part'>
          <div  className='display_flex_column'>
            <h2>{data ? data.name : 'go to home'}</h2>
            <div className='display_flex'>
            <div>ratings {data.rating}</div>
            <div className='p'><span>on {data.schedule}</span> <span>{data.time}</span></div>
            <div >WatchTime({data.runtime})</div>
          </div>
          <div>{data ?  <p dangerouslySetInnerHTML={{__html:data.summary}} className="summary"></p> : 'go home'}</div>
          <a href={data.url}  rel="noreferrer"  className="btn btn1" target='_blank'>book movie tickets</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Summary