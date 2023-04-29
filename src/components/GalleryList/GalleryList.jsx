import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList(props) {
  
    return(
      <>
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
      </>
    )
}

export default GalleryList;