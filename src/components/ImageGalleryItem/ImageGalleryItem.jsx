import css from './ImageGalleryItem.module.css'

import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ data }) => (
    <>
        {
            data.map((elem) => {
                const id = elem.id
                const link = `#${id}`
                return <li className={css.listItem} key={elem.id}>
                    <a href={link} >
                        <img src={elem.webformatURL} className={css.picture} alt={elem.tags} />
                    </a>
                </li>

            })}
    </>
)
// ImageGalleryItem.propTypes = {
//     obj: PropTypes.,
// }