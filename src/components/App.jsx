import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";


export class App extends Component {
  state = {
    page: 1,
  }

  componentDidMount() {
    this.getData()
  }


  fetchCats = () => {
    const API_KEY = '38312526-d0ea4ba6d4ac142df4a72a2b0'
    const URL = "https://pixabay.com/api/?q=cat&page=1&key=" + API_KEY + "&image_type=photo&orientation=horizontal&per_page=12"
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json()
      });
  }
  getData = () => {
    fetchCats()
    .then((cats) => console.log(cats))
    .catch((error) => console.log(error));
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
