import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";


export class App extends Component {

  getCośtam = () => {

  }
  render() {

    return (
      <>
        <Searchbar></Searchbar>
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>

      </>
    )

  }

};
