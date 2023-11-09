import css from './ImageGalleryItem.module.css'
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ data, onClick }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {data.map((elem) => {
                return <li className={css.listItem} key={elem.id}>
                    <img onClick={onClick} key={elem.id} src={elem.webformatURL} className={css.picture} alt={elem.tags} />
                </li>
                {
                    isOpen && (
                        <Modal data={elem.webformatURL} onClose={() => setIsOpen(false)}>
                        </Modal>)
                }
            })}
        </>

    )

}
ImageGalleryItem.propTypes = {
    obj: PropTypes.array,
    onClick: PropTypes.func,
}