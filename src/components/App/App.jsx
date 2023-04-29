import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

function App() {
const [gallery, setGallery] = useState([]);


useEffect(() => {
  fetchPhotos();
}, [])

const fetchPhotos = () => {

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
      <Header/>
      <GalleryList 
        gallery = {gallery}
        fetchPhotos = {fetchPhotos}
      />
      </div>
    );
}

export default App;
