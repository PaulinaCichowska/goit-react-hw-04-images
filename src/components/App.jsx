import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal"


export class App extends Component {
  state = {
    data: [],
    page: 1,
    term: "",
    isLoading: false,
  }
  // onInputChange = (e) => {
  //   this.setState({
  //     term: e.target.value,
  //   })
  // }
  // next = () => {
  //   this.setState((p) => ({
  //     page: p.page + 1,
  //   }));
  // };
  // prev = () => {
  //   this.setState((p) => ({
  //     page: p.page - 1,
  //   }));
  // };

  onFormSubmit = (e) => {
    const form = e.currentTarget;
    const search = e.target.search.value
    e.preventDefault();

    this.setState({
      term: search,
    })
    form.reset();

  }

  filteredImg() {
    return this.state.data.filter(img => img.tags.toLowerCase().indexOf(this.state.term) !== -1)
  }


  componentDidMount() {
    this.fetchCats()
    this.setState({ isLoading: true });
  }


  fetchCats = async () => {
    this.setState({
      isLoading: true,
    })
    const { page } = this.state
    const API_KEY = '38312526-d0ea4ba6d4ac142df4a72a2b0'
    const URL = `https://pixabay.com/api/?q=cat&page=${page}&key=` + API_KEY + "&image_type=photo&orientation=horizontal&per_page=12"
    await fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json()
      })
      .then((data) => {
        let list = data.hits
        this.setState((p) => ({
          data: [...p.data, ...list],
          isLoading: false
        }))
      }
      )
      .catch((error) => console.log(error))


  }


  loadMore = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1
      };
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchCats();
    }
  }


  render() {

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit}  ></Searchbar>
        <div>
          <ImageGallery>
            <ImageGalleryItem obj={this.filteredImg()} />
          </ImageGallery>
          <Modal obj={this.filteredImg()} />
        </div>
        <Button loadMore={this.loadMore} ></Button>
        {this.state.isLoading ? 'Loading...' : 'Load More'}

      </>
    )

  }

};
