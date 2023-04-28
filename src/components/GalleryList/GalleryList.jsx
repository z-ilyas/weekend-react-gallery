import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props) {
    
    return(
        <>
        {
            props.gallery.map((pic)=> {
              return (
                <div  className='gallery' key={pic.id}>
                  {pic.path}
                </div>
            )})
        }
        </>
    )
}

export default GalleryList;