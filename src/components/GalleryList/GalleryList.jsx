import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList(props) {
  
    return(
      <div>
      <p>Gallery goes here</p>
        {
          props.gallery.map((pic) => {
            return (
              <GalleryItem 
                key={pic.id}
                pic = {pic}
                fetchPhotos = {props.fetchPhotos}
              />
            )})

        }
        </div>

    )
}

export default GalleryList;