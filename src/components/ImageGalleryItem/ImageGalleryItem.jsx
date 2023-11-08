import css from './ImageGalleryItem.module.css'

import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ data }) => (
    <>
        {data.map((elem) => {
            return <li className={css.listItem} key={elem.id}>
                <img key={elem.id} src={elem.webformatURL} className={css.picture} alt={elem.tags} />
            </li>

        })}
    </>
)
ImageGalleryItem.propTypes = {
    obj: PropTypes.array,
}