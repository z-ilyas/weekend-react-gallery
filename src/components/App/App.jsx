import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
const [gallery, setGallery] = useState([]);


useEffect(() => {
  fetchPhotos();
}, [])

// useEffect(() => {
//   console.log(gallery);
// }, [gallery])
  
function fetchPhotos (){

    axios({
        method: 'GET',
        url: '/gallery'
    }).then((response) => {
        console.log('Here is the entire DATA',response.data);
        setGallery(response.data)
    }).catch((error) => {
        console.log('We are not getting any Data', error);
    })
}
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/work_out.jpg"/> */}
      <GalleryList 
        gallery = {gallery}
      />
      </div>
    );
}

export default App;
