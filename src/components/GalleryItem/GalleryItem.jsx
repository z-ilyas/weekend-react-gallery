import { useState } from 'react';
import axios from 'axios';

function GalleryItem (props) {

const [Description, setDescription] = useState(false);

const flipImage = () => {
    console.log('Clicked');
    if(Description){
        setDescription(false)
    }else{
        setDescription(true)
    }
    console.log(Description);
}
function countLikes(likeId) {
    axios({
        method: 'PUT',
        url: `/gallery/like/${likeId}`,
        }).then(function(response) {
            console.log('Look at me');
            props.fetchPhotos()
        }).catch(function(error) {
            console.log('uh no, you have no Likes:', error);
        })
}

const showStuff = (pics, descriptions, id, likes) => {
if(!Description){
    return(
    <div className='parent'>
        <div className='pics' key={id}>
        <img src = {pics} 
            onClick={flipImage}
        />
        <button onClick={() => {countLikes(id)}}>👍🏾</button>
        </div>
        <div className='likes'>
        <p>{likes} People are Smashing the Button</p> 
       </div>
    </div>
    )
}else{
    return(
    <div className='parent'>
        <div className='descriptions' key={id}>
        <p>{descriptions}</p>
        <button onClick={() => {countLikes(id)}}>👍🏾</button>
        </div>
        <div className='likes'>
        <p>{likes} People are Smashing the Button</p> 
        </div>
    </div>
    )
}
}

return (
        <>
        {showStuff(props.pic.path, props.pic.description, props.pic.id, props.pic.likes)}
        </>
    )
}


export default GalleryItem;