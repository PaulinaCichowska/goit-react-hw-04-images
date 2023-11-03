import css from './ImageGallery.module.css'
export const ImageGallery = ({ children }) => (
    <div className={css.container}>
        <div className={css.top}>
            <ul className={css.list}>
                {children}
            </ul>
        </div>
    </div>
)