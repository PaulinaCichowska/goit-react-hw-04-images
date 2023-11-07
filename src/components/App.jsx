import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal"
import { Dna } from "react-loader-spinner";

export class App extends Component {
  state = {
    data: [],
    page: 1,
    term: "",
    isLoading: false,
  }

  componentDidMount() {
    this.fetchData()
    this.setState({ isLoading: true });
  }

  fetchData = async (search) => {
    this.setState({
      isLoading: true,
    })
    const { page } = this.state
    const API_KEY = '38312526-d0ea4ba6d4ac142df4a72a2b0'
    const URL = `https://pixabay.com/api/?q=${search || this.state.term}&page=${page}&key=` + API_KEY + "&image_type=photo&orientation=horizontal&per_page=12"
    await fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json()
      })
      .then((data) => {
        let list = data.hits
        if (search !== this.state.term) {
          this.setState((p) => ({
            data: [...p.data, ...list],
            isLoading: false
          }))
        } else {

          this.setState((p) => ({
            data: [...list],
            isLoading: false
          }))
        }
      }
      )
      .catch((error) => console.log(error))


  }


  onFormSubmit = (e) => {
    const form = e.currentTarget;
    const search = e.target.search.value
    e.preventDefault();
    if (search !== this.state.term) {
      this.setState({
        term: search,
      })
      this.fetchData(search)

    }
    form.reset();

  }



  filteredImg() {
    return this.state.data.filter(img => img.tags.toLowerCase().indexOf(this.state.term) !== -1)
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
      this.fetchData();
    }
  }


  render() {

    return (
      <>


        <Searchbar onSubmit={this.onFormSubmit}  ></Searchbar>
        <ImageGallery>
          <ImageGalleryItem obj={this.filteredImg()} />
        </ImageGallery>
        <Modal obj={this.filteredImg()} />
        {this.state.isLoading ? (
          <Dna
            height="200"
            width="300"
            ariaLabel="loading" />)
          :
          (
            <Button loadMore={this.loadMore} >load more</Button>
          )
        }

      </>
    )

  }

};
