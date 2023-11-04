import css from './ImageGallery.module.css'
import PropTypes from 'prop-types';

export const ImageGallery = ({ children }) => (
    <div className={css.container}>
        <div className={css.top}>
            <ul className={css.list}>
                {children}
            </ul>
        </div>
    </div>
)
ImageGallery.propTypes = {
    children: PropTypes.node,
}