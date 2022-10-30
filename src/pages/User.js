import React from 'react'
import { useState, useEffect } from 'react';
import Nav from './Nav';
// import { Link } from 'react-router-dom'


export default function User() {


const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [page, setPage] = useState(1);


// const PER_PAGE = 5;
const pages = 5;
// const skip = page * PER_PAGE - PER_PAGE;



useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${page}results=20`
    )
    .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
   
       .then((actualData) => {
        setData(actualData);
         setError(null);
       })
       .catch((err) => {
        setError(err.message);
         setData(null);
       })
      .finally(() => {
         setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }
  return (
      <>
    <Nav/>
    <div className="App">
        
      <h1 className='user-head'>Random Users</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className='container'>
      <ul className='userApi'>
        {data &&
          data?.results.map((each, index ) => (
            <li className="Api-item" key={each.id} >
                {`${index +=1}`}
              <h3>{each.title}</h3>
              <h3> {each.name.title} {each.name.first} {each.name.last}</h3>
              <img src={each.picture.large} alt=""/>
              <p>Gender: {each.gender}</p>
              <p>Phone-number: {each.cell}</p>
              <p>City: {each.location.city}</p>
              <p>Country: {each.location.country}</p>
              <p>Postcode: {each.location.postcode}</p>

            </li>
          ))}
      </ul>
      </div>
      <div className='footer'>
        <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button className="btn btn-secondary STY"
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>}
        {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)} className="btn btn-secondary STY">{each}</button>
        )
      )}
      <button className="btn btn-secondary STY"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
        </div>
    </div>
    </>
   
  );
}
  

