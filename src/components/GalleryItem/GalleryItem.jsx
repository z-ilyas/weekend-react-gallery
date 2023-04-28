import { useState } from 'react';
import axios from 'axios';

function GalleryItem (props) {

const [Description, setDescription] = useState(false);
const flipImage = () => {
    if(Description){
        setDescription(false)
    }else{
        setDescription(true)
    }
}

const showStuff = (pics) => {
    return (<img src = {pics}
    />
)
    }

// }else{
//     return (
//     <>
//         {descriptions}
//     </>
// )}

return (
        <>
    {showStuff(props.pic.path)}
        </>
    )
}


export default GalleryItem;