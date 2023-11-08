import React, { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
// import { Modal } from "./Modal/Modal"

import { Loader } from './Loader/Loader'


export const App2 = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState('cat');
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = async (search) => {
        setIsLoading(true)
        const API_KEY = '38312526-d0ea4ba6d4ac142df4a72a2b0'
        const URL = `https://pixabay.com/api/?q=${search || term}&page=${page}&key=` + API_KEY + "&image_type=photo&orientation=horizontal&per_page=12"
        try {
            const response = await fetch(URL);
            const json = await response.json();
            const newData = json.hits
            setData(json.hits);

            if (search !== term) {
                setData([...data, ...newData])

            } else {
                setData([...newData])

            }

        } catch (error) {
            console.log("error", error);
        } finally {
            setIsLoading(false)
        }
    };





    useEffect(() => {
        fetchData();

        setIsLoading(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const prev = page - 1;
        if (prev !== page) {
            fetchData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        const search = e.target.search.value
        e.preventDefault();

        setTerm(search)
        fetchData(search)

        form.reset();
    }



    const filteredImg = () => {
        return data.filter(img => img.tags.toLowerCase().indexOf(term) !== -1)

    }



    const loadMore = () => {
        setPage(page + 1)
    }




    return (
        <>
            <Searchbar onSubmit={onFormSubmit}  ></Searchbar>
            <ImageGallery>
                <ImageGalleryItem data={filteredImg()} />
            </ImageGallery>
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
