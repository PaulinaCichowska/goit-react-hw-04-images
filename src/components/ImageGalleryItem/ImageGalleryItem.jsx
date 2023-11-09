import css from './ImageGalleryItem.module.css'


import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ data, onClick }) => {

    return (
        <>
            {data.map((elem) => {
                return <li className={css.listItem} key={elem.id}>
                    <img onClick={onClick} id={elem.id} key={elem.id} src={elem.webformatURL} className={css.picture} alt={elem.tags} />
                </li>
            })}

        </>)
}
ImageGalleryItem.propTypes = {
    obj: PropTypes.array,
    onClick: PropTypes.func,
}