import { useEffect, useState, useRef } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal"

import { Loader } from './Loader/Loader'


export const App2 = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const fetchData = async (search) => {
        setIsLoading(true)


        const API_KEY = '38312526-d0ea4ba6d4ac142df4a72a2b0'
        const URL = `https://pixabay.com/api/?q=${search || term}&page=${page}&key=` + API_KEY + "&image_type=photo&orientation=horizontal&per_page=12"
        await fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json()
            })
            .then((data) => {
                let list = data.hits
                if (search !== term) {
                    setData([...data, ...list])
                    setIsLoading(false)

                } else {
                    setData([...list])
                    setIsLoading(false)

                }
            }
            )
            .catch((error) => console.log(error))


    }

    useEffect(() => {
        fetchData();
        setIsLoading(true)
    }, []);

    useEffect(() => {
        const value = ref.current
        if (value !== page) {
            fetchData();
        }
    }, [page]);

    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        const search = e.target.search.value
        e.preventDefault();
        if (search !== term) {
            setTerm(search)
            fetchData(search)

        }
        form.reset();

    }



    const filteredImg = () => {
        return data.filter(img => img.tags.toLowerCase().indexOf(term) !== -1)
    }



    const loadMore = () => {
        setPage(page + 1)

    }

    const ref = useRef();




    return (
        <>


            <Searchbar onSubmit={onFormSubmit}  ></Searchbar>
            <ImageGallery>
                <ImageGalleryItem obj={filteredImg()} />
            </ImageGallery>
            <Modal obj={filteredImg()} />
            {isLoading ? (
                <Loader></Loader>

            )
                :
                (
                    <Button loadMore={loadMore} >load more</Button >
                )
            }

        </>
    )



};
