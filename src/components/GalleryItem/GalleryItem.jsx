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
function countLikes(likeId, likes) {
    axios({
        method: 'PUT',
        url: `/gallery/like/${likeId}`,
        data: {
            likes: 1
        }
        }).then(function(response) {
            props.fetchPhotos
        }).catch(function(error) {
            console.log('uh no, you have no Likes:', error);
        })
}
const showStuff = (pics, descriptions, id, likes) => {
if(!Description){
    return(
        <>
        < div className='gallery' key={id}>
        <img src = {pics} 
            onClick={flipImage}
        />
        </div>
        <div>
            <button onClick={() => {countLikes(id, likes)}}>👍🏾</button>
        </div>
        </>
    )
}else{
    return(
        <>
        < div className='gallery' key={id}>
        {descriptions}
        </div>
        <div>
            <button onClick={(event) => {countLikes(id, likes)}}>👍🏾</button>
        </div>
        </>
    )
}
}

return (
        <>
        {showStuff(props.pic.path, props.pic.description, props.pic.id, props.pic.likes)}
        <div>
           <p>{props.pic.likes} People are Smashing the Button</p> 
        </div>
        </>
    )
}


export default GalleryItem;