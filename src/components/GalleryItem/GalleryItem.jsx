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

const showStuff = (pics, descriptions) => {
if(!Description){
    return(
        < div className='gallery'>
        <img src = {pics} 
            onClick={flipImage}
        />
        </div>
    )
}else{
    return(
        < div className='gallery'>
        {descriptions}
        </div>
    )
}
}


return (
        <>
        {showStuff(props.pic.path, props.pic.description)}
        </>
    )
}


export default GalleryItem;