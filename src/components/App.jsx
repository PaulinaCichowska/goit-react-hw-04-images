import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    data: [],
    page: 1,
    term: "",
  }
  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    })
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const newData = this.filteredImg()

  }

  filteredImg() {
    return this.state.data.filter(img => img.tags.toLowerCase().indexOf(this.state.term) !== -1)
  }


  componentDidMount() {
    this.fetchCats()
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
      })
      .then((data) => {
        let list = data.hits
        this.setState({
          data: list,
        })
      }
      )
      .catch((error) => console.log(error))
  }


  render() {

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} value={this.state.term} onChange={this.onInputChange} ></Searchbar>
        <div>
          <ImageGallery>
            <ImageGalleryItem obj={this.filteredImg()} />
          </ImageGallery>
          <Button></Button>
        </div>
      </>
    )

  }

};
