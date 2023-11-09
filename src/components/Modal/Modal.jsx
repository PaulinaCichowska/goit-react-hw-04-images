import css from './Modal.module.css'
import PropTypes from 'prop-types';


//właściwie nie ma tu modala tylko css udający modala// 
export const Modal = ({ src, onClose, alt }) => {
    return (
        <>

            return <div className={css.modal}>
                <span className={css.close} onClick={onClose}>
                    &times;
                </span>
                <div className={css.container}>
                    <img className={css.img} src={src} alt={alt} /></div>
            </div>
        </>

    )
}

Modal.propTypes = {
    obj: PropTypes.array,
    alt: PropTypes.string,
    src: PropTypes.string,
}