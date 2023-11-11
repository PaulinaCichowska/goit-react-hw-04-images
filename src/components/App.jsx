import React, { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal"
import { Loader } from './Loader/Loader'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const App = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState('cat');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [altImg, setAltImg] = useState("");

    const fetchData = async (search) => {
        setIsLoading(true)
        const API_KEY = '38312526-d0ea4ba6d4ac142df4a72a2b0'
        const URL = `https://pixabay.com/api/?q=${search || term}&page=${page}&key=` + API_KEY + "&image_type=photo&orientation=horizontal&per_page=12"
        try {
            const response = await fetch(URL);
            const json = await response.json();
            let newData = json.hits
            if (search === term) {
                setData([...data, ...newData])


            } else {
                setData([...newData])
                console.log("2")

            }

        } catch (error) {
            console.log("error", error);
        } finally {
            setIsLoading(false)
        }
    };


    useEffect(() => {
        fetchData(term);

        setIsLoading(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const prev = page - 1;
        if (prev !== page) {
            fetchData(term);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        const search = e.target.search.value
        e.preventDefault();
        form.reset();
        if (term !== search && search !== "") {
            fetchData(search)
            setTerm(search)
            getFilteredData()

        }

    }

    const getFilteredData = () => {
        return data.filter(img => img.tags.toLowerCase().indexOf(term) !== -1)
    }

    const loadMore = () => {
        setPage(page + 1)

    }

    const showModal = (e) => {
        setIsOpen((prev) => !prev);

        const ID = e.target.id
        // eslint-disable-next-line
        const item = data.find(item => item.id == ID);
        setAltImg(item.tags);
        setUrl(item.largeImageURL)
    }

    const CloseModal = () => {
        setIsOpen((prev) => !prev);

    }

    return (
        <>
            <Searchbar onSubmit={onFormSubmit}  ></Searchbar>
            {(data.length > 0) ? (
                <div>
                    <ImageGallery>
                        <ImageGalleryItem data={data} onClick={showModal} />
                    </ImageGallery>
                    {
                        isOpen && (
                            <Modal src={url} alt={altImg} onClose={CloseModal}>
                            </Modal>)
                    }
                    {isLoading ?
                        (<Loader></Loader>)
                        :
                        (<Button loadMore={loadMore} >load more</Button >)
                    }
                </div>
            ) : (
                Notify.warning('Im sorry but nothing was found', {
                    timeout: 1000,
                    showOnlyTheLastOne: true,
                })

            )
            }   </>
    )
};
