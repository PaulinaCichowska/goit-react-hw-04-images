import css from './Modal.module.css'
import PropTypes from 'prop-types';


//właściwie nie ma tu modala tylko css udający modala// 
export const Modal = ({ src, onClose }) => {
    return (
        <div className={css.modal}>
            <span className={css.close} onClick={onClose}>
                &times;
            </span>
            <img className="modal-content" src={src} alt="xd" />
        </div>
    )
}

Modal.propTypes = {
    obj: PropTypes.array,
}